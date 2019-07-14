import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IosInstallComponent } from './ios-install/ios-install.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafariBuddyInterceptor, ErrorInterceptor } from './services';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaxiDetailComponent } from './dashboard/taxi-detail.component';
import { TaxiReviewModalComponent } from './dashboard/taxi-review-modal.component';
import { TaxiNewComponent } from './dashboard/taxi-new.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IosInstallComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TaxiDetailComponent,
    TaxiReviewModalComponent,
    TaxiNewComponent,
    FileUploadComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    InternationalPhoneNumberModule,
    NgbModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SafariBuddyInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [IosInstallComponent, TaxiReviewModalComponent, TaxiNewComponent]
})
export class AppModule { }
