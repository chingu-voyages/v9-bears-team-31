import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ChangeDetectorRef } from '@angular/core';
import { GenericValidator } from '../../shared';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { fromEvent, merge, Observable } from 'rxjs';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';
import { WindowService, WebServiceService } from '../../services';
import { PasswordValidation } from './validatePassword.class';

import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) fromInputElement: ElementRef[];

  verifyForm: FormGroup;
  userRegistrationForm: FormGroup;
  windowRef: any;
  phoneNumber: any;
  verificationCode: boolean;
  user: any;
  error: string;
  userJson: any;
  errorMessage: string;
  isloading = false;

  type: FormGroup;
  validPasswordRegister = false;
  validConfirmPasswordRegister = false;

  genders = [
    { value: 'Male', viewValue: 'male' },
    { value: 'Female', viewValue: 'female' },
    { value: 'Other', viewValue: 'Prefer Not to Disclose' }
  ];

   // Use with the generic validation message class
   displayMessage: { [key: string]: string } = {};
   private validationMessages: { [key: string]: { [key: string]: string } };
   private genericValidator: GenericValidator;

  constructor(
    private win: WindowService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: WebServiceService,
    private cd: ChangeDetectorRef
  ) {
    // Defines all the validation messages for the form.
    // These could instead/plus be retrieved fron a file or database.
    this.validationMessages = {
      firstName: {
        required: 'Please enter firt name',
        pattern: 'first name should be atleast 2 letters'
      },
      lastName: {
        required: 'Please enter last name',
        pattern: 'last name should be atleast 2 letters'
      },
      password: {
        required: 'Please enter your password'
      },
      confirmPassword: {
        required: 'Please confirm your password'
      },
      phone: {
        required: 'Please enter your mobile phone number'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit(
  ) {
    this.verifyForm = this.formBuilder.group({
      phone: ['', Validators.required],
      code: ''
    });

    this.userRegistrationForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(/(.*[a-z]){2}/i)]],
      lastName: [null, [Validators.required, Validators.pattern(/(.*[a-z]){2}/i)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    },
    {
      validator: PasswordValidation.MatchPassword // your validation method
      }
    );

    this.windowRef = this.win.windowRef;
    const new_firebase = firebase.initializeApp(environment.firebase);
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback(response: any) {
        console.log(response);
      }
    });

    this.windowRef.recaptchaVerifier.render();
  }

  ngAfterViewInit(): void {
    // watch for blur events from any input on the form
    const controlBlurs: Observable<any>[] = this.fromInputElement.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, 'blur')
    );

    merge(this.verifyForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(this.verifyForm);
      });

    merge(this.userRegistrationForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(this.userRegistrationForm);
      });
  }

  sendLoginCode() {
    this.phoneNumber = this.verifyForm.get('phone').value;
    console.log(this.phoneNumber);
    if (localStorage.getItem(this.phoneNumber)) {
      // already got the verification code once, so show the register form
      this.user = localStorage.getItem(this.phoneNumber);
      const hideDiv = document.getElementById('verify_phone');
      hideDiv.style.display = 'none';
    } else {
      const appVerifier = this.windowRef.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(this.phoneNumber, appVerifier)
        .then(result => {
          console.log('result', result);
          this.windowRef.confirmationResult = result;
          this.verificationCode = true;
        })
        .catch(error => console.log('this errror occurred: ', error));
    }

    if (this.verificationCode) {
      const hidePhone = document.getElementById('send_number');
      hidePhone.style.display = 'none';
    }
  }

  verifyLoginCode() {
    const code = this.verifyForm.get('code').value;
    this.windowRef.confirmationResult
      .confirm(code)
      .then((result: any) => {
        this.user = result.user;
        localStorage.setItem(this.phoneNumber, JSON.stringify(this.user));
        const hideDiv = document.getElementById('verify_phone');
        hideDiv.style.display = 'none';
      })
      .catch((error: any) => console.log('Incorrect code entered?: ', error));
  }

  userSignUp(): void {
    if (this.userRegistrationForm.valid) {
      if (this.userRegistrationForm.dirty) {
        const userDetails = this.userRegistrationForm.getRawValue();
        this.userJson = {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          phoneNumber: this.phoneNumber,
          password: userDetails.password
        };

        this.service.register(this.userJson)
          .subscribe((data: any) => {
            if (data.success) {
              this.router.navigate(['/login']);
            } else if (!data.success) {
              // TODO
            } else {
              // TODO
            }
          });
      }
    } else {
      this.errorMessage = 'please correct validation errors';
    }
  }

  passwordValidationRegister(e) {
    if (e.length > 5) {
        this.validPasswordRegister = true;
    } else {
      this.validPasswordRegister = false;
    }
  }
  confirmPasswordValidationRegister(e) {
    if (this.userRegistrationForm.controls.password.value === e) {
        this.validConfirmPasswordRegister = true;
    } else {
      this.validConfirmPasswordRegister = false;
    }
  }

}
