import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { WebServiceService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private webServivce: WebServiceService
  ) {
    this.createLoginForm();
   }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.webServivce.login(this.loginForm.value)
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.loading = false;
        })
      )
      .subscribe((credentials: any) => {
        if (credentials.success) {
          this.route.queryParams.subscribe(params => {
            this.router.navigate([params.redirect || '/login'], {replaceUrl: true});
          });
        }
      });
  }

  private createLoginForm() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

}
