import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceService } from '../services';

@Component({
  selector: 'app-taxi-modal',
  templateUrl: './taxi-review-modal.component.html',
  styleUrls: ['./taxi-review-modal.component.scss']
})
export class TaxiReviewModalComponent implements OnInit {
  formReview: FormGroup;

  constructor(private builder: FormBuilder,
              public dialogRef: MatDialogRef<TaxiReviewModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private webService: WebServiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendReview(data: any) {
    console.log('data', data.taxi.plateNumber);
    const formValue = this.formReview.getRawValue();
    const rating = formValue.userReview;
    const comment = formValue.comment;
    console.log('rating', rating);

    const makeReview = {
      taxiPlateNumber: data.taxi.plateNumber,
      userReview: rating,
      userComment: comment,
      userPhoneNumber: '+2560784760712'
    };

    this.webService.rate(makeReview)
      .subscribe((rateRes: any) => {
        if (rateRes.success) {
          console.log('review response', rateRes.data );
        } else if (rateRes.error) {
          console.log('failed to post review');
        }
      });
  }

  ngOnInit() {
    this.formReview = this.builder.group({
      userReview: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

}
