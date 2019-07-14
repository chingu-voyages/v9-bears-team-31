import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebServiceService } from '../services';
import {requiredFileType} from '../shared/file-upload-validators';
import { uploadProgress,  toResponseBody} from '../services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-taxi',
  templateUrl: './taxi-new.component.html',
  styleUrls: ['./taxi-new.component.scss']
})
export class TaxiNewComponent implements OnInit {
  @ViewChild('taxiImage', { read: true, static: false }) taxiImage: any;
  formReview: FormGroup;
  hasRated = false;
  progress = 0;
  success: boolean;

  loading: boolean;

  currentUser: any;
  storage = localStorage || sessionStorage;

  constructor(private builder: FormBuilder,
              public dialogRef: MatDialogRef<TaxiNewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private webService: WebServiceService,
              private toastr: ToastrService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  hasError( field: string, error: string ) {
    const control = this.formReview.get(field);
    return control.dirty && control.hasError(error);
  }

  createNewReview(data: string) {
    const formValue = this.formReview.getRawValue();
    let plateNumber = formValue.plateNumber;
    plateNumber = plateNumber.replace(/ +/g, '');
    const rating = formValue.userReview;
    const comment = formValue.comment;
    const image = formValue.taxiImage;
    const model = formValue.model;


    const toReview = {
      taxiPlateNumber: plateNumber,
      userReview: rating,
      userComment: comment,
      userPhoneNumber: data
    };

    this.webService.rate(toReview)
      .subscribe((rateRes: any) => {
        if (rateRes.success) {
          this.loading = true;
          this.hasRated = true;
           this.toastr.success(`Still working . . ., wait for final verdict`);
          console.log('review response', rateRes.data );
          this.webService.taxi(
            {
              taxiImage: image,
              plateNumber,
              model
            }
          )
            .pipe(
              uploadProgress(progress => (this.progress = progress)),
              toResponseBody()
            )
            .subscribe((newTaxis: any) => {
              this.progress = 0;
              this.success = true;
              this.loading = false;
              if (newTaxis.success) {
                this.toastr.success(`New Taxi Review Successful`, 'Thank you');
                console.log('new taxi created and rated', newTaxis.data);
              } else {
                this.toastr.error(`please try again`, 'Not Successful');
                console.log('failed to create taxi', newTaxis.message);
              }
            });
        } else {
          this.loading = false;
          this.toastr.error(`please try again`, 'Not Successful');
          console.log('failed to post review');
        }
      });
  }

  ngOnInit() {
    this.formReview = this.builder.group({
      userReview: ['', Validators.required],
      plateNumber: ['', Validators.required],
      model: ['', Validators.required],
      comment: ['', Validators.required],
      taxiImage: ['', Validators.required]
    });
  }

}
