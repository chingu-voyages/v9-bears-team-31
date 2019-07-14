import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceService } from '../services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-taxi-modal',
  templateUrl: './taxi-review-modal.component.html',
  styleUrls: ['./taxi-review-modal.component.scss']
})
export class TaxiReviewModalComponent implements OnInit {
  formReview: FormGroup;
  storage = localStorage || sessionStorage;
  currentUser: any;
  phoneNumber: string;

  constructor(private builder: FormBuilder,
              public dialogRef: MatDialogRef<TaxiReviewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private webService: WebServiceService,
              private toastr: ToastrService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendReview(data: any) {
    console.log('whole data', data);
    console.log('data phone', data.taxi.plateNumber);
    const formValue = this.formReview.getRawValue();
    const rating = formValue.userReview;
    const comment = formValue.comment;
    console.log('rating', rating);

    const makeReview = {
      taxiPlateNumber: data.taxi.plateNumber,
      userReview: rating,
      userComment: comment,
      userPhoneNumber: this.phoneNumber,
    };

    this.webService.rate(makeReview)
      .subscribe((rateRes: any) => {
        if (rateRes.success) {
          this.toastr.success(`Your Review was Successful`, 'Thank you');
          console.log('review response', rateRes.data );
        } else {
          this.toastr.error(`please try again`, 'Not Successful');
          console.log('failed to post review');
        }
      });
  }

  ngOnInit() {
    this.currentUser = JSON.parse(this.storage.getItem('currentUser'));
    this.phoneNumber = this.currentUser.data.userData.phoneNumber;

    this.formReview = this.builder.group({
      userReview: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

}
