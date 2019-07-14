import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Taxi, TaxiResolved, WebServiceService } from '../services';
import { TaxiReviewModalComponent } from './taxi-review-modal.component';

@Component({
  templateUrl: './taxi-detail.component.html',
  styleUrls: ['./taxi-detail.component.scss']
})
export class TaxiDetailComponent implements OnInit {
  pageTitle = 'Taxi Detail';
  taxi: Taxi;
  errorMessage: string;

  currentUser: any;
  storage = localStorage || sessionStorage;
  userName: string;
  phoneNumber: string;
  joinedOn: string;


  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private webService: WebServiceService,
    private router: Router) { }

  ngOnInit(): void {
    const resolvedData: TaxiResolved =
      this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onTaxiRetrieved(resolvedData.taxi);

    this.currentUser = JSON.parse(this.storage.getItem('currentUser'));
    this.userName = `${this.currentUser.data.userData.firstName} ${this.currentUser.data.userData.lastName}`;
    this.phoneNumber = this.currentUser.data.userData.phoneNumber;
    this.joinedOn = this.currentUser.data.userData.createdAt;
  }

  onTaxiRetrieved(taxi: Taxi): void {
    this.taxi = taxi;

    if (this.taxi) {
      this.pageTitle = `Taxi Detail: ${this.taxi.plateNumber}`;
    } else {
      this.pageTitle = 'No taxi found';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaxiReviewModalComponent, {
      width: '300px',
      data: {taxi: this.taxi}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  logout() {
    this.webService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }
}
