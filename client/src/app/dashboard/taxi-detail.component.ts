import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Taxi, TaxiResolved } from '../services';

@Component({
  templateUrl: './taxi-detail.component.html',
  styleUrls: ['./taxi-detail.component.scss']
})
export class TaxiDetailComponent implements OnInit {
  pageTitle = 'Taxi Detail';
  taxi: Taxi;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: TaxiResolved =
      this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onTaxiRetrieved(resolvedData.taxi);
  }

  onTaxiRetrieved(taxi: Taxi): void {
    this.taxi = taxi;

    if (this.taxi) {
      this.pageTitle = `Taxi Detail: ${this.taxi.plateNumber}`;
    } else {
      this.pageTitle = 'No taxi found';
    }
  }
}
