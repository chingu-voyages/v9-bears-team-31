(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"fa fa-spinner spinner\"\n  *ngIf=\"loading\"></span>\n<div class=\"container\">\n  <mat-sidenav-container\n    fullscreen\n    [hasBackdrop]=\"mobileQuery.matches\">\n    <mat-sidenav #lnav\n      mode=\"over\"\n      class=\"sidenav\">\n      <div class=\"content\">\n          <mat-list>\n            <mat-list-item *ngFor=\"let route of nav\">\n              <a mat-button routerLink=\"{{route.path}}\" routerLinkActive=\"active\" (click)=\"toggleMobileNav(lnav)\">{{route.title}}</a>\n            </mat-list-item>\n          </mat-list>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content class=\"sidenav-content\">\n      <mat-toolbar\n        class=\"toolbar\"\n        [class.app-is-mobile]=\"mobileQuery.matches\"\n       >\n        <button\n          mat-icon-button\n          (click)=\"lnav.toggle()\"\n          *ngIf=\"mobileQuery.matches\">\n          <mat-icon>menu</mat-icon>\n        </button>\n        {{title}}\n        <div class=\"fill-space\"></div>\n        <span whoami></span>\n      </mat-toolbar>\n        <mat-drawer-container class=\"sidenav-container\">\n          <mat-drawer\n            mode=\"side\"\n            [opened]=\"!mobileQuery.matches\">\n            <div class=\"content\">\n              <mat-list>\n                <mat-list-item *ngFor=\"let route of nav\">\n                  <a mat-button routerLink=\"{{route.path}}\" routerLinkActive=\"active\" (click)=\"toggleMobileNav(lnav)\">{{route.title}}</a>\n                </mat-list-item>\n              </mat-list>\n            </div>\n          </mat-drawer>\n          <mat-drawer-content>\n              <div class=\"content\"\n              [@slideInAnimation]=\"outlet.isActivated ? outlet.activatedRoute: ''\">\n                <router-outlet #outlet=\"outlet\"></router-outlet>\n              </div>\n          </mat-drawer-content>\n        </mat-drawer-container>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-4\">\n        <form class=\"form\" (ngSubmit)=\"login()\" [formGroup]=\"loginForm\" novalidate>\n            <h3>Welcome Back!</h3>\n            <div class=\"alert alert-danger\" [hidden]=\"!error || loading\">\n              phone number or password incorrect.\n            </div>\n            <div class=\"form-group\">\n              <input\n                type=\"tel\"\n                class=\"form-control\"\n                formControlName=\"phoneNumber\"\n                autocomplete=\"phoneNumber\"\n                [placeholder]=\"'Registered Phone Number'\"\n              />\n              <span hidden>Username</span>\n              <small\n                [hidden]=\"loginForm.controls.phoneNumber.valid || loginForm.controls.phoneNumber.untouched\"\n                class=\"text-danger\"\n              >\n                Phone number is required\n              </small>\n            </div>\n            <div class=\"form-group\">\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                formControlName=\"password\"\n                autocomplete=\"current-password\"\n                [placeholder]=\"'Password'\"\n                required\n              />\n              <span hidden>Password</span>\n              <small\n                [hidden]=\"loginForm.controls.password.valid || loginForm.controls.password.untouched\"\n                class=\"text-danger\"\n              >\n                Password is required\n              </small>\n            </div>\n\n            <div class=\"form-check form-group\">\n              <label class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"remember\" />\n                <span>Remember me</span>\n              </label>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-fill btn-info btn-wd\" type=\"submit\" [disabled]=\"loginForm.invalid || loading\">\n                <i class=\"fas fa-cog fa-spin\" [hidden]=\"!loading\"></i>\n                <span>Login</span>\n                <span class=\"fa fa-spinner spinner\"\n                *ngIf=\"loading\"></span>\n              </button>\n            </div>\n            <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" class=\"register-link\">New User? Register</a>\n          </form>\n    </div>\n    <div class=\"app-name col-xs-8\">\n      <h1>Safari Buddy</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <span class=\"fa fa-spinner spinner\"\n    *ngIf=\"loading\"></span>\n  <div class=\"row\">\n    <div id=\"verify_phone\" class=\"with-form col-xs-4\">\n      <form [formGroup]=\"verifyForm\" class=\"form\">\n        <h3 class=\"register-heading\">SignUp with Your Mobile Number</h3>\n        <div [hidden]=\"user\">\n          <div id=\"send_number\">\n            <div class=\"form-group\">\n              <international-phone-number formControlName=\"phone\" class=\"phone\" [maxlength]=\"20\" [defaultCountry]=\"'ug'\" [required]=\"true\"  name=\"phone\" [allowedCountries]=\"['ug', 'ng', 'us']\"\n              [ngClass]=\"{ 'is-invalid': displayMessage.phone }\"></international-phone-number>\n              <span class=\"small text-danger\">\n                {{ displayMessage.phone }}\n              </span>\n            </div>\n            <div class=\"input-group\">\n              <span></span>\n              <div id=\"recaptcha-container\" [ngStyle]=\"{ 'margin-right': '50px' }\"></div>\n              <div>\n                <input\n                  type=\"button\"\n                  (click)=\"sendLoginCode()\"\n                  class=\"btn btn-fill btn-info btn-wd mb-4\"\n                  name=\"sendText\"\n                  value=\"SMS Text Login Code\"\n                />\n              </div>\n            </div>\n            <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" class=\"register-link\">Have an Account? Login</a>\n          </div>\n\n          <div *ngIf=\"windowRef.confirmationResult\">\n            <div class=\"info-text\">Please wait to receive an SMS Code in your number {{ phoneNumber }} ...</div>\n            <hr />\n            <div class=\"form-group\">\n              <input\n                type=\"text\"\n                formControlName=\"code\"\n                class=\"form-control\"\n                placeholder=\"Enter SMS code like ***** Received\"\n              />\n              <div\n                class=\"small text-danger\"\n                *ngIf=\"(!verifyForm.get('code').valid && verifyForm.get('code').touched) || wrongCode\"\n              >\n                Please enter the sms code received in your phone (768679)...\n              </div>\n            </div>\n            <div class=\"col-lg-offset-3\">\n              <input\n                type=\"button\"\n                (click)=\"verifyLoginCode()\"\n                class=\"btn btn-fill btn-info btn-wd \"\n                name=\"sendText\"\n                value=\"Verify\"\n              />\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div *ngIf=\"user\" class=\"with-form col-xs-4\">\n      <div class=\"row register-form\">\n          <div class=\"col-xs-12 col-sm-12\">\n              <form class=\"form\" [formGroup]=\"userRegistrationForm\" novalidate>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"first name\"\n                      formControlName=\"firstName\"\n                      [ngClass]=\"{ 'is-invalid': displayMessage.firstName }\"\n                      >\n                      <span class=\"small text-danger\">\n                        {{ displayMessage.firstName }}\n                      </span>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      placeholder=\"last name\"\n                      formControlName=\"lastName\"\n                      [ngClass]=\"{ 'is-invalid': displayMessage.lastName }\"\n                      >\n                      <span class=\"small text-danger\">\n                        {{ displayMessage.lastName }}\n                      </span>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      placeholder=\"********* Password\"\n                      formControlName=\"password\"\n                      [ngClass]=\"{ 'is-invalid': displayMessage.password }\"\n                      >\n                      <span class=\"small text-danger\">\n                        {{ displayMessage.password }}\n                      </span>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      placeholder=\"********* confirm Password\"\n                      formControlName=\"confirmPassword\"\n                      [ngClass]=\"{ 'is-invalid': displayMessage.password }\"\n                      >\n                      <span class=\"small text-danger\">\n                        {{ displayMessage.password }}\n                      </span>\n                  </div>\n\n                  <button\n                    class=\"btn btn-primary mr-3\"\n                    style=\"width:80px;\"\n                    (click)=\"userSignUp()\"\n                    [title]=\"userRegistrationForm.valid ? '' : 'Disabled until the form data is valid'\"\n                    [disabled]=\"!userRegistrationForm.valid\"\n                  >\n                    Register\n                  </button>\n\n              </form>\n          </div>\n      </div>\n    </div>\n    <div class=\"app-name col-xs-8\">\n      <h1>Safari Buddy</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main row\">\n  <div class=\"col-md-8 main-content\">\n      <!-- <h1>\n          {{ title }}\n      </h1> -->\n      <div class=\"mat-elevation-z8\">\n          <div class=\"header-dashboard\">\n              <mat-form-field>\n                <input matInput placeholder=\"Search for taxi using plate number\" #input>\n              </mat-form-field>\n              <div class=\"create-taxi\">\n                <button mat-raised-button color=\"primary\" class=\"create-taxi-button\" (click)=\"openDialog()\">Add New Taxi Review</button>\n              </div>\n          </div>\n          <div class=\"spinner-container\" *ngIf=\"taxiDataSource.loading | async\">\n\n              <mat-spinner></mat-spinner>\n\n          </div>\n        <table mat-table [dataSource]=\"taxiDataSource\"\n        matSort matSortActive=\"review\" matSortDirection=\"asc\" matSortDisableClear >\n            <!-- Image Column -->\n        <ng-container matColumnDef=\"image\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Thumbnail </th>\n          <td mat-cell *matCellDef=\"let row\"><img [attr.src]=\"row.imageURL\"\n            onError=\"this.src='../../assets/img/default.jpg';\"\n            width=\"30%\" height=\"auto\" /> </td>\n        </ng-container>\n\n        <!-- Plate Number Column -->\n        <ng-container matColumnDef=\"plateNumber\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Number Plate </th>\n          <td mat-cell *matCellDef=\"let row\"> <a [routerLink]=\"['./', row.plateNumber]\" >{{row.plateNumber}}</a> </td>\n        </ng-container>\n\n        <!-- Review Column -->\n        <ng-container matColumnDef=\"review\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Average Review </th>\n          <td mat-cell *matCellDef=\"let row\"><ngb-rating\n            [(rate)]=\"row.averageReview\"\n            [readonly]=\"true\" max=\"5\"\n            style=\" font-size: 1.5rem; color: #F3A41A;\"></ngb-rating></td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n        </table>\n        <mat-paginator [length]=20 [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 25]\"></mat-paginator>\n      </div>\n  </div>\n  <div class=\"col-md-4 right-sidebar\">\n    <div class=\"right-sidebar-items\">\n      <div class=\"profile\">\n        <mat-card>\n          <mat-card-title>\n            My Profile\n          </mat-card-title>\n          <hr>\n          <mat-card-content>\n            <div class=\"username\"><strong>User Name: &nbsp; &nbsp; &nbsp; &nbsp;</strong>{{userName}}</div>\n            <div class=\"contact-number\"><strong>Contact: &nbsp; &nbsp; &nbsp; &nbsp;</strong> {{phoneNumber}}</div>\n            <div class=\"date-joined\"><strong>Joined On: &nbsp; &nbsp; &nbsp; &nbsp;</strong>{{joinedOn | date}}</div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-raised-button color=\"accent\" (click)=\"logout()\">LOG OUT</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <hr>\n      <div class=\"new-review\">\n          <mat-card>\n              <mat-card-title>\n               Safari Buddy Statistics\n              </mat-card-title>\n              <hr>\n              <mat-card-content>\n                <p>Coming soon !!!!</p>\n              </mat-card-content>\n            </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-detail.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/taxi-detail.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main row\">\n  <mat-card class=\"col-md-8 main-content\">\n    <div class=\"taxi-details\">\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <mat-card-title>Taxi Details</mat-card-title>\n            <mat-card-subtitle>{{ taxi.taxi.plateNumber }}</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"{{taxi.taxi.imageURL}}\"\n            onError=\"this.src='../../assets/img/default.jpg';\"\n            alt=\"Taxi Image\">\n          <mat-card-content>\n              <strong>Model: </strong> <button mat-button>{{taxi.taxi.model}}</button>\n              <strong>Added On: </strong> <button mat-button>{{taxi.taxi.createdAt | date}}</button>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button><ngb-rating\n              [(rate)]=\"taxi.taxi.averageReview\"\n              [readonly]=\"true\" max=\"5\"\n              style=\" font-size: 1.5rem; color: #F3A41A;\"></ngb-rating></button>\n            <button mat-button>{{taxi.taxi.averageReview}}</button>\n            <button mat-button  mat-raised-button color=\"warn\" (click)=\"openDialog()\">Add Review</button>\n          </mat-card-actions>\n        </mat-card>\n    </div>\n    <div class=\"taxi-reviews\">\n      <h3>User Reviews</h3>\n      <div class=\"reviews\" *ngFor=\"let taxiReview of taxi.review\">\n          <mat-card class=\"single-review\">\n            <mat-card-header>\n                <mat-card-subtitle><strong>Reviewer:</strong> &nbsp; &nbsp;{{taxiReview.userPhoneNumber}}</mat-card-subtitle>\n            </mat-card-header>\n            <hr>\n            <mat-card-content>\n              <div class=\"stars\"><strong>Stars: &nbsp; &nbsp;</strong> <ngb-rating\n              [(rate)]=\"taxiReview.userReview\"\n              [readonly]=\"true\" max=\"5\"\n              style=\"color: #F3A41A;\">\n              </ngb-rating></div>\n              <div class=\"createdAt\">\n                <strong>Reviewed On: &nbsp; &nbsp;</strong> {{taxiReview.createdAt | date }}\n              </div>\n              <div class=\"comment\">\n                <strong>Comments</strong>\n                <div>{{taxiReview.userComment}}</div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n      </div>\n    </div>\n  </mat-card>\n  <div class=\"col-md-4 right-sidebar\">\n      <div class=\"right-sidebar-items\">\n        <div class=\"profile m-2\">\n          <mat-card>\n            <mat-card-title>\n              My Profile\n            </mat-card-title>\n            <hr>\n            <mat-card-content>\n              <div class=\"username\"><strong>User Name: &nbsp; &nbsp; &nbsp; &nbsp;</strong>{{userName}}</div>\n              <div class=\"contact-number\"><strong>Contact: &nbsp; &nbsp; &nbsp; &nbsp;</strong> {{phoneNumber}}</div>\n              <div class=\"date-joined\"><strong>Joined On: &nbsp; &nbsp; &nbsp; &nbsp;</strong>{{joinedOn | date}}</div>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-raised-button color=\"accent\" (click)=\"logout()\">LOG OUT</button>\n            </mat-card-actions>\n          </mat-card>\n        </div>\n        <hr>\n        <div class=\"new-review m-2\">\n            <mat-card>\n                <mat-card-title>\n                 Safari Buddy Statistics\n                </mat-card-title>\n                <hr>\n                <mat-card-content>\n                  <p>Coming soon !!!!</p>\n                </mat-card-content>\n              </mat-card>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-new.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/taxi-new.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title>Post New Taxi Rating</h1>\n\n<div class=\"example-container\">\n    <span class=\"fa fa-spinner spinner\"\n    *ngIf=\"loading\"></span>\n    <form [formGroup]=\"formReview\">\n      <mat-form-field>\n        <input matInput placeholder=\"Taxi Plate Number\" formControlName=\"plateNumber\">\n        <div class=\"invalid-feedback\" style=\"display: block\">\n          <ng-container *ngIf=\"hasError('plateNumber', 'required')\">This field is required</ng-container>\n        </div>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Taxi Model\" formControlName=\"model\">\n        <div class=\"invalid-feedback\" style=\"display: block\">\n          <ng-container *ngIf=\"hasError('model', 'required')\">This field is required</ng-container>\n        </div>\n      </mat-form-field>\n\n        <div class=\"form-group\">\n            <app-file-upload formControlName=\"taxiImage\" name='taxiImage' [progress]=\"progress\"></app-file-upload>\n            <div class=\"invalid-feedback\" style=\"display: block\">\n                <ng-container *ngIf=\"hasError('taxiImage', 'required')\">Only PNG or JPEG 🤡</ng-container>\n            </div>\n        </div>\n\n      <hr>\n      <div>Add Rating</div>\n      <ngb-rating\n                [readonly]=\"false\" max=\"5\"\n                formControlName=\"userReview\"\n                style=\" font-size: 1.5rem; color: #F3A41A;\">\n      </ngb-rating>\n      <div class=\"invalid-feedback\" style=\"display: block\">\n        <ng-container *ngIf=\"hasError('userReview', 'required')\">This field is required</ng-container>\n      </div>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Reason for this Rating\" formControlName=\"comment\"></textarea>\n        <div class=\"invalid-feedback\" style=\"display: block\">\n          <ng-container *ngIf=\"hasError('comment', 'required')\">This field is required</ng-container>\n        </div>\n      </mat-form-field>\n      <div class=\"form-group\">\n        <button mat-button  cdkFocusInitial (click)=\"createNewReview(data)\" [mat-dialog-close]=\"!loading\">Add Review</button>\n        <button mat-button  (click)=\"onNoClick()\">Cancel</button>\n      </div>\n    </form>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-review-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/taxi-review-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Rate this Taxi</h1>\n\n  <form [formGroup]=\"formReview\">\n    <ngb-rating\n              [readonly]=\"false\" max=\"5\"\n              formControlName=\"userReview\"\n              style=\" font-size: 1.5rem; color: #F3A41A;\">\n    </ngb-rating>\n    <mat-form-field>\n      <textarea matInput name=\"comment\" id=\"comment\" placeholder=\"Reason for this Rating\" formControlName=\"comment\"></textarea>\n    </mat-form-field>\n    <div mat-dialog-actions>\n      <button mat-button  cdkFocusInitial (click)=\"sendReview(data.taxi)\" mat-dialog-close>Add Review</button>\n      <button mat-button  (click)=\"onNoClick()\">Cancel</button>\n    </div>\n  </form>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-upload/file-upload.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-drop-area\">\n    <span class=\"fake-btn\">Upload Taxi Image</span>\n    <span class=\"file-msg\">{{file ? file.name : 'or drag and drop image here' }}</span>\n    <input class=\"file-input\" name='licence' type=\"file\">\n</div>\n<app-progress [progress]=\"progress\"></app-progress>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n  <div class=\"container\">\n  </div>\n    <div class=\"header\">\n      Ride | Review | Find\n\n      <div class=\"sub-heading\">\n        Help make Taxi riding better by reviewing all your rides,<br>\n        Built for the Community, by the Community\n      </div>\n    </div>\n\n  <footer>\n    <address>\n      copyright @chingu v9 team 31 bears\n    </address>\n  </footer>\n</article>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ios-install/ios-install.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ios-install/ios-install.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  Install this app on your device.\n  <br/>Tap the share icon and then <br/><strong>Add to homescreen</strong>.\n  <div class=\"full-width\"><mat-icon>arrow_downward</mat-icon></div>\n</div>\n<button class=\"btn-close\" mat-icon-button (click)=\"close()\" aria-label=\"Close\">\n    <mat-icon>close</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progress/progress.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progress/progress.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" *ngIf=\"progress > 0\">\n    <div class=\"progress\">\n        <div class=\"progress-bar\" [style.width.%]=\"progress\">{{progress}}%\n        </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_taxi_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/taxi-detail.component */ "./src/app/dashboard/taxi-detail.component.ts");
/* harmony import */ var _services_taxi_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/taxi-resolver.service */ "./src/app/services/taxi-resolver.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_services__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    {
        path: 'dashboard/:plateNumber',
        component: _dashboard_taxi_detail_component__WEBPACK_IMPORTED_MODULE_7__["TaxiDetailComponent"],
        resolve: { resolvedData: _services_taxi_resolver_service__WEBPACK_IMPORTED_MODULE_8__["TaxiResolver"] },
        canActivate: [_services__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.animation.ts":
/*!**********************************!*\
  !*** ./src/app/app.animation.ts ***!
  \**********************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInAnimation', [
    // Transition between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // Events to apply
        // Defined style and animation function to apply
        // Config object with optional set to true to handle when element not yet added to the DOM
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
        // group block executes in parallel
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  font-weight: bolder;\n  font-size: 2rem;\n  background: #ECAB27;\n  color: #ffffff;\n}\n\n.mat-drawer {\n  background: #F4CA3A;\n}\n\n.mat-drawer a {\n  background: #ECAB27;\n  color: #ffffff;\n  font-weight: bold;\n  width: 8rem;\n}\n\n.mat-drawer-content {\n  background: url('nightfall.jpg') no-repeat;\n  background-size: 100%;\n}\n\n.mat-list-item .active {\n  background: #27295C;\n  color: #eff310;\n}\n\n/* Spinner */\n\n.spinner {\n  font-size: 300%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  color: #ECAB27;\n}\n\n.fa-spinner {\n  -webkit-animation: spin 1000ms infinite linear;\n  animation: spin 1000ms infinite linear;\n}\n\n@media (min-width: 481px) and (max-width: 769px) {\n  .mat-drawer a {\n    width: 6rem;\n    text-align: center;\n  }\n\n  .mat-drawer-content {\n    background-size: 100% 100%;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .mat-drawer a {\n    width: 6rem;\n    text-align: center;\n  }\n\n  .mat-drawer-content {\n    background-size: 100% 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBLFlBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDSSw4Q0FBQTtFQUNBLHNDQUFBO0FDREo7O0FESUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ0RGOztFREdBO0lBQ0UsMEJBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUNERjs7RURHQTtJQUNFLDBCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZDogI0VDQUIyNztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZDogI0Y0Q0EzQTtcbn1cblxuLm1hdC1kcmF3ZXIgYSB7XG4gIGJhY2tncm91bmQ6ICNFQ0FCMjc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDhyZW07XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvbmlnaHRmYWxsLmpwZycpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZWNlZWNmLCAjOTI4ODRjKTtcbn1cblxuLm1hdC1saXN0LWl0ZW0gLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyNzI5NUM7XG4gIGNvbG9yOiByZ2IoMjM5LCAyNDMsIDE2KTtcbn1cblxuLyogU3Bpbm5lciAqL1xuLnNwaW5uZXIge1xuICBmb250LXNpemU6MzAwJTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6MTA7XG4gIGNvbG9yOiAjRUNBQjI3O1xufVxuXG4uZmEtc3Bpbm5lciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLm1hdC1kcmF3ZXIgYSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tYXQtZHJhd2VyIGEge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWF0LWRyYXdlci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgfVxufVxuXG4iLCIubWF0LXRvb2xiYXIge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQ6ICNFQ0FCMjc7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQ6ICNGNENBM0E7XG59XG5cbi5tYXQtZHJhd2VyIGEge1xuICBiYWNrZ3JvdW5kOiAjRUNBQjI3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA4cmVtO1xufVxuXG4ubWF0LWRyYXdlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltZy9uaWdodGZhbGwuanBnXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4ubWF0LWxpc3QtaXRlbSAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI3Mjk1QztcbiAgY29sb3I6ICNlZmYzMTA7XG59XG5cbi8qIFNwaW5uZXIgKi9cbi5zcGlubmVyIHtcbiAgZm9udC1zaXplOiAzMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogI0VDQUIyNztcbn1cblxuLmZhLXNwaW5uZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLm1hdC1kcmF3ZXIgYSB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tYXQtZHJhd2VyIGEge1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
/* harmony import */ var _app_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.animation */ "./src/app/app.animation.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, toast, webService, router) {
        var _this = this;
        this.toast = toast;
        this.webService = webService;
        this.router = router;
        this.title = 'Safari Buddy';
        this.nav = [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'Login',
                path: '/login'
            },
            {
                title: 'Register',
                path: '/register'
            },
            {
                title: 'Dashboard',
                path: '/dashboard'
            }
        ];
        // tslint:disable-next-line: variable-name
        this.authenticated = false;
        this.toggleSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // Add route
        this.isLoggedIn$ = this.webService.isLoggedIn;
        // Detects if device is on iOS
        var isIos = function () {
            var userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };
        // Detects if device is in standalone mode
        var isInStandaloneMode = function () { return ('standalone' in window.navigator) && (window.navigator.standalone); };
        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.toast.openFromComponent(_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_4__["IosInstallComponent"], {
                duration: 8000,
                horizontalPosition: 'start',
                panelClass: ['mat-elevation-z3']
            });
        }
    };
    AppComponent.prototype.toggleMobileNav = function (nav) {
        if (this.mobileQuery.matches) {
            nav.toggle();
        }
    };
    Object.defineProperty(AppComponent.prototype, "user", {
        get: function () {
            if (this.webService.isAuthenticated()) {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationError"]) {
            this.loading = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "toggleSideNav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [_app_animation__WEBPACK_IMPORTED_MODULE_5__["slideInAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services__WEBPACK_IMPORTED_MODULE_6__["WebServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/fesm5/ngx-intl-tel-input.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-international-phone-number */ "./node_modules/ngx-international-phone-number/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_taxi_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/taxi-detail.component */ "./src/app/dashboard/taxi-detail.component.ts");
/* harmony import */ var _dashboard_taxi_review_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/taxi-review-modal.component */ "./src/app/dashboard/taxi-review-modal.component.ts");
/* harmony import */ var _dashboard_taxi_new_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/taxi-new.component */ "./src/app/dashboard/taxi-new.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_11__["IosInstallComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _dashboard_taxi_detail_component__WEBPACK_IMPORTED_MODULE_21__["TaxiDetailComponent"],
                _dashboard_taxi_review_modal_component__WEBPACK_IMPORTED_MODULE_22__["TaxiReviewModalComponent"],
                _dashboard_taxi_new_component__WEBPACK_IMPORTED_MODULE_23__["TaxiNewComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_24__["FileUploadComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_25__["ProgressComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_17__["BsDropdownModule"].forRoot(),
                ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxIntlTelInputModule"],
                ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_18__["InternationalPhoneNumberModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_26__["AngularFontAwesomeModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot(),
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _services__WEBPACK_IMPORTED_MODULE_13__["SafariBuddyInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _services__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_11__["IosInstallComponent"], _dashboard_taxi_review_modal_component__WEBPACK_IMPORTED_MODULE_22__["TaxiReviewModalComponent"], _dashboard_taxi_new_component__WEBPACK_IMPORTED_MODULE_23__["TaxiNewComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n.app-name h1 {\n  display: block;\n  justify-content: center;\n  margin-left: 10rem;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 7rem;\n  color: white;\n  margin-top: 16%;\n}\n.form {\n  display: block;\n  background: #FFDD03;\n  margin-top: 20%;\n  padding: 3%;\n  border-radius: 5px;\n}\n.container h3 {\n  text-align: center;\n  color: #0A0A0A;\n  font-size: 1rem;\n  margin-top: 1rem;\n}\n.form-group button {\n  width: 80px;\n}\n.form-group {\n  flex-direction: row-reverse;\n}\n.form-group .phone {\n  justify-content: center;\n}\n/* Spinner */\n.spinner {\n  font-size: 300%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  color: yellow;\n}\n.fa-spinner {\n  -webkit-animation: spin 1000ms infinite linear;\n  animation: spin 1000ms infinite linear;\n}\n@media (max-width: 769px) {\n  .row {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .container h3 {\n    font-size: 1rem;\n    color: #0A0A0A;\n  }\n\n  .app-name h1 {\n    margin-top: 5%;\n    margin-left: 0;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .with-form {\n    width: 100%;\n  }\n\n  .form {\n    margin-top: 10%;\n  }\n}\n@media (max-width: 480px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n\n  .app-name h1 {\n    margin-left: 0;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxrRkFBQTtBQUNSO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDQUY7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7QURFQSxZQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNJLDhDQUFBO0VBQ0Esc0NBQUE7QUNDSjtBREVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7RUNDRjs7RURDQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VDRUY7O0VEQUE7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ0dGOztFRERBO0lBQ0UsV0FBQTtFQ0lGOztFREZBO0lBQ0UsZUFBQTtFQ0tGO0FBQ0Y7QUREQTtFQUNFO0lBQ0UsOEJBQUE7RUNHRjs7RUREQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG4uYXBwLW5hbWUgaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNiU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkREMDM7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgcGFkZGluZzogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRhaW5lciBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwQTBBMEE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmZvcm0tZ3JvdXAgLnBob25le1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU3Bpbm5lciAqL1xuLnNwaW5uZXIge1xuICBmb250LXNpemU6MzAwJTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6MTA7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5mYS1zcGlubmVyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLmNvbnRhaW5lciBoMyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMEEwQTBBO1xuICB9XG4gIC5hcHAtbmFtZSBoMSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICAud2l0aC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJVxuICB9XG4gIC5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5hcHAtbmFtZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1uYW1lIGgxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTByZW07XG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gU2NyaXB0XCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNiU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkREMDM7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgcGFkZGluZzogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRhaW5lciBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwQTBBMEE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uZm9ybS1ncm91cCAucGhvbmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU3Bpbm5lciAqL1xuLnNwaW5uZXIge1xuICBmb250LXNpemU6IDMwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5mYS1zcGlubmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBzcGluIDEwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5jb250YWluZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzBBMEEwQTtcbiAgfVxuXG4gIC5hcHAtbmFtZSBoMSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuXG4gIC53aXRoLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5hcHAtbmFtZSBoMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, formBuilder, webServivce, toastr) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.webServivce = webServivce;
        this.toastr = toastr;
        this.loading = false;
        this.createLoginForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.webServivce.login(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.loginForm.markAsPristine();
            _this.loading = false;
        }))
            .subscribe(function (credentials) {
            if (credentials.success) {
                _this.loading = false;
                _this.toastr.success("Howdy, " + credentials.data.userData.firstName);
                // this.webServivce.notify('info', `Welcome to Safari Buddy ${credentials.data.userData.firstName}`, 'top', 'right');
                _this.route.queryParams.subscribe(function (params) {
                    _this.router.navigate([params.redirect || '/dashboard'], { replaceUrl: true });
                });
            }
            else {
                _this.loading = false;
                _this.toastr.error('Invalid phone or password');
                // this.webServivce.notify('warning', `Something went wrong`, 'top', 'right');
                _this.route.queryParams.subscribe(function (params) {
                    _this.router.navigate([params.redirect || '/login'], { replaceUrl: true });
                });
            }
        });
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remember: true
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n.app-name h1 {\n  display: block;\n  justify-content: center;\n  margin-left: 10rem;\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 7rem;\n  color: white;\n  margin-top: 16%;\n}\n.form {\n  display: block;\n  background: #FFDD03;\n  margin-top: 20%;\n  padding: 3%;\n  border-radius: 5px;\n}\n.container h3 {\n  text-align: center;\n  color: #0A0A0A;\n  font-size: 1rem;\n}\n.form-group {\n  flex-direction: row-reverse;\n}\n.form-group .phone {\n  justify-content: center;\n}\n/* Spinner */\n.spinner {\n  font-size: 300%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  color: yellow;\n}\n.fa-spinner {\n  -webkit-animation: spin 1000ms infinite linear;\n  animation: spin 1000ms infinite linear;\n}\n@media (max-width: 769px) {\n  .row {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .container h3 {\n    font-size: 1rem;\n    color: #0A0A0A;\n  }\n\n  .app-name h1 {\n    margin-top: 5%;\n    margin-left: 0;\n    text-align: center;\n    font-size: 4rem;\n  }\n\n  .with-form {\n    width: 100%;\n  }\n\n  .form {\n    margin-top: 10%;\n  }\n}\n@media (max-width: 480px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n\n  .app-name h1 {\n    margin-left: 0;\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNSO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFRjtBRENBO0VBQ0UsMkJBQUE7QUNFRjtBRENBO0VBQ0UsdUJBQUE7QUNFRjtBRENBLFlBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0ksOENBQUE7RUFDQSxzQ0FBQTtBQ0VKO0FEQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUNHRjs7RUREQTtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDSUY7O0VERkE7SUFDRSxXQUFBO0VDS0Y7O0VESEE7SUFDRSxlQUFBO0VDTUY7QUFDRjtBREZBO0VBQ0U7SUFDRSw4QkFBQTtFQ0lGOztFREZBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG4uYXBwLW5hbWUgaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNiU7XG59XG4uZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRkZERDAzO1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIHBhZGRpbmc6IDMlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb250YWluZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMEEwQTBBO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uZm9ybS1ncm91cCAucGhvbmV7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTcGlubmVyICovXG4uc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTozMDAlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDoxMDtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmZhLXNwaW5uZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBzcGluIDEwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAuY29udGFpbmVyIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMwQTBBMEE7XG4gIH1cbiAgLmFwcC1uYW1lIGgxIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIC53aXRoLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cbiAgLmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cbiAgLmFwcC1uYW1lIGgxIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuXG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG4uYXBwLW5hbWUgaDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDE2JTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI0ZGREQwMztcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBwYWRkaW5nOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGFpbmVyIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzBBMEEwQTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmZvcm0tZ3JvdXAgLnBob25lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNwaW5uZXIgKi9cbi5zcGlubmVyIHtcbiAgZm9udC1zaXplOiAzMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDEwO1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uZmEtc3Bpbm5lciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAuY29udGFpbmVyIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMwQTBBMEE7XG4gIH1cblxuICAuYXBwLW5hbWUgaDEge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAud2l0aC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAuYXBwLW5hbWUgaDEge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _validatePassword_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validatePassword.class */ "./src/app/auth/register/validatePassword.class.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(win, router, route, formBuilder, service, cd, toastr) {
        this.win = win;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.cd = cd;
        this.toastr = toastr;
        this.loading = false;
        this.validPasswordRegister = false;
        this.validConfirmPasswordRegister = false;
        this.genders = [
            { value: 'Male', viewValue: 'male' },
            { value: 'Female', viewValue: 'female' },
            { value: 'Other', viewValue: 'Prefer Not to Disclose' }
        ];
        // Use with the generic validation message class
        this.displayMessage = {};
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
        this.genericValidator = new _shared__WEBPACK_IMPORTED_MODULE_2__["GenericValidator"](this.validationMessages);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.verifyForm = this.formBuilder.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            code: ''
        });
        this.userRegistrationForm = this.formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/(.*[a-z]){2}/i)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/(.*[a-z]){2}/i)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        }, {
            validator: _validatePassword_class__WEBPACK_IMPORTED_MODULE_10__["PasswordValidation"].MatchPassword // your validation method
        });
        this.windowRef = this.win.windowRef;
        try {
            firebase__WEBPACK_IMPORTED_MODULE_7__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase);
        }
        catch (error) {
        }
        var new_firebase = firebase__WEBPACK_IMPORTED_MODULE_7__;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: function (response) {
            }
        });
        this.windowRef.recaptchaVerifier.render();
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // watch for blur events from any input on the form
        var controlBlurs = this.fromInputElement.map(function (formControl) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(formControl.nativeElement, 'blur');
        });
        rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([this.verifyForm.valueChanges], controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .subscribe(function () {
            _this.displayMessage = _this.genericValidator.processMessages(_this.verifyForm);
        });
        rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([this.userRegistrationForm.valueChanges], controlBlurs)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(1000))
            .subscribe(function () {
            _this.displayMessage = _this.genericValidator.processMessages(_this.userRegistrationForm);
        });
    };
    RegisterComponent.prototype.sendLoginCode = function () {
        var _this = this;
        this.phoneNumber = this.verifyForm.get('phone').value;
        if (localStorage.getItem(this.phoneNumber)) {
            // already got the verification code once, so show the register form
            this.user = localStorage.getItem(this.phoneNumber);
            var hideDiv = document.getElementById('verify_phone');
            hideDiv.style.display = 'none';
        }
        else {
            var appVerifier = this.windowRef.recaptchaVerifier;
            firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]()
                .signInWithPhoneNumber(this.phoneNumber, appVerifier)
                .then(function (result) {
                _this.windowRef.confirmationResult = result;
                _this.verificationCode = true;
            })
                .catch(function (error) { return error; });
        }
        if (this.verificationCode) {
            var hidePhone = document.getElementById('send_number');
            hidePhone.style.display = 'none';
        }
    };
    RegisterComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        var code = this.verifyForm.get('code').value;
        this.windowRef.confirmationResult
            .confirm(code)
            .then(function (result) {
            _this.user = result.user;
            localStorage.setItem(_this.phoneNumber, JSON.stringify(_this.user));
            var hideDiv = document.getElementById('verify_phone');
            hideDiv.style.display = 'none';
        })
            .catch(function (error) { return error; });
    };
    RegisterComponent.prototype.userSignUp = function () {
        var _this = this;
        if (this.userRegistrationForm.valid) {
            if (this.userRegistrationForm.dirty) {
                this.loading = true;
                var userDetails = this.userRegistrationForm.getRawValue();
                this.userJson = {
                    firstName: userDetails.firstName,
                    lastName: userDetails.lastName,
                    phoneNumber: this.phoneNumber,
                    password: userDetails.password
                };
                this.service.register(this.userJson)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.loading = false;
                        _this.router.navigate(['/login']);
                        _this.toastr.success("Registration Successful, please login", 'Welcome Aboard!!!');
                    }
                    else if (data.error) {
                        // TODO
                        _this.toastr.error("Registration failed, please try again", 'Oh, Sorry!!!');
                    }
                    else {
                        // TODO
                        _this.loading = false;
                        _this.toastr.error("Registration failed, please try again", 'Oh, Sorry!!!');
                    }
                });
            }
        }
        else {
            this.errorMessage = 'please correct validation errors';
        }
    };
    RegisterComponent.prototype.passwordValidationRegister = function (e) {
        if (e.length > 5) {
            this.validPasswordRegister = true;
        }
        else {
            this.validPasswordRegister = false;
        }
    };
    RegisterComponent.prototype.confirmPasswordValidationRegister = function (e) {
        if (this.userRegistrationForm.controls.password.value === e) {
            this.validConfirmPasswordRegister = true;
        }
        else {
            this.validConfirmPasswordRegister = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RegisterComponent.prototype, "fromInputElement", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_9__["WindowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_9__["WebServiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/validatePassword.class.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/register/validatePassword.class.ts ***!
  \*********************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n\n.main-content {\n  background: #262858;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-x: auto;\n}\n\n.main-content .header-dashboard {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 20px;\n  margin-bottom: 10px;\n}\n\ntr .mat-header-row {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.mat-row:hover {\n  background-color: #fceec3;\n  cursor: pointer;\n}\n\n::ng-deep .main-content .header-dashboard .mat-form-field-placeholder {\n  color: #ffffff !important;\n}\n\n::ng-deep .main-content .header-dashboard .mat-form-field-underline {\n  background-color: #FFFFFF !important;\n}\n\n.right-sidebar-items {\n  display: flex;\n  flex-direction: column;\n}\n\n.profile .mat-card .mat-card-title, .new-review .mat-card .mat-card-title {\n  text-align: center;\n}\n\n.profile .mat-card .mat-card-content {\n  justify-content: center;\n  margin-left: 100px;\n}\n\n.profile .mat-card .mat-card-actions button {\n  display: flex;\n  justify-content: right;\n  left: 280px;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 2rem;\n  color: #7985cb;\n}\n\nform {\n  display: flex;\n  align-content: center;\n  flex-direction: row;\n  justify-content: center;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-column-image {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 50% !important;\n  width: 50% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  padding: 10%;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-plateNumber {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-review {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 30% !important;\n  width: 30% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.search {\n  position: absolute;\n  border: 2px solid #7985cb;\n  background-color: #7985cb;\n  color: #fafafa;\n}\n\n@media (max-width: 480px) {\n  .profile .mat-card .mat-card-actions button {\n    left: 200px;\n  }\n\n  .profile .mat-card .mat-card-content {\n    margin-left: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxtQ0FBQTtFQUFBLDJCQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUVFLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1JGOztBRFdBO0VBQ0MsV0FBQTtBQ1JEOztBRFdBO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNWRjs7QURhQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNaRjs7QURlQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGFBQUE7QUNkRjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDZEY7O0FEaUJBO0VBQ0U7SUFDRSxXQUFBO0VDZEY7O0VEZ0JBO0lBQ0UsaUJBQUE7RUNiRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi8vIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjYyODU4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQgLmhlYWRlci1kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxudHIgLm1hdC1oZWFkZXItcm93IHtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOCwgMTk1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgLm1haW4tY29udGVudCAuaGVhZGVyLWRhc2hib2FyZCAgLm1hdC1mb3JtLWZpZWxkLXBsYWNlaG9sZGVye1xuXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWFpbi1jb250ZW50IC5oZWFkZXItZGFzaGJvYXJkICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuXG4ucmlnaHQtc2lkZWJhci1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtdGl0bGUsICAubmV3LXJldmlldyAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBsZWZ0OiAyODBweDtcbn1cblxuaDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjNzk4NWNiO1xufVxuLy8gdGFibGUge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnRhYmxle1xuIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNvbHVtbi1pbWFnZSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMTAlO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1wbGF0ZU51bWJlciB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcmV2aWV3IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMzAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6MnB4IHNvbGlkICM3OTg1Y2I7XG4gIGJhY2tncm91bmQtY29sb3I6Izc5ODVjYjtcbiAgY29sb3I6I2ZhZmFmYTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgbGVmdDogMjAwcHg7XG4gIH1cbiAgLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgfVxufVxuXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjYyODU4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQgLmhlYWRlci1kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxudHIgLm1hdC1oZWFkZXItcm93IHtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2VlYzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5tYWluLWNvbnRlbnQgLmhlYWRlci1kYXNoYm9hcmQgLm1hdC1mb3JtLWZpZWxkLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYWluLWNvbnRlbnQgLmhlYWRlci1kYXNoYm9hcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LXNpZGViYXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvZmlsZSAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxlLCAubmV3LXJldmlldyAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZSAubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4ucHJvZmlsZSAubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgbGVmdDogMjgwcHg7XG59XG5cbmgxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzc5ODVjYjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY29sdW1uLWltYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAxMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcGxhdGVOdW1iZXIge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcmV2aWV3IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMzAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3OTg1Y2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTg1Y2I7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgbGVmdDogMjAwcHg7XG4gIH1cblxuICAucHJvZmlsZSAubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _taxi_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxi.datasource */ "./src/app/dashboard/taxi.datasource.ts");
/* harmony import */ var _taxi_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taxi-new.component */ "./src/app/dashboard/taxi-new.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(webService, builder, dialog, router) {
        this.webService = webService;
        this.builder = builder;
        this.dialog = dialog;
        this.router = router;
        this.storage = localStorage || sessionStorage;
        this.displayedColumns = ['image', 'plateNumber', 'review'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.taxiDataSource = new _taxi_datasource__WEBPACK_IMPORTED_MODULE_7__["TaxiDataSource"](this.webService);
        this.taxiDataSource.loadTaxiData();
        this.searchForm = this.builder.group({
            searchInput: ''
        });
        this.currentUser = JSON.parse(this.storage.getItem('currentUser'));
        this.userName = this.currentUser.data.userData.firstName + " " + this.currentUser.data.userData.lastName;
        this.phoneNumber = this.currentUser.data.userData.phoneNumber;
        this.joinedOn = this.currentUser.data.userData.createdAt;
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.loadTaxiDataPage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.loadTaxiDataPage(); }))
            .subscribe();
    };
    DashboardComponent.prototype.loadTaxiDataPage = function () {
        var searchValue = this.searchForm.getRawValue();
        this.taxiDataSource.loadTaxiData(this.input.nativeElement.value);
    };
    DashboardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_taxi_new_component__WEBPACK_IMPORTED_MODULE_8__["TaxiNewComponent"], {
            width: '400px',
            data: this.phoneNumber
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // TODO
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this.webService.logout().subscribe(function () { return _this.router.navigate(['/login'], { replaceUrl: true }); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myBtn', { read: true, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardComponent.prototype, "myBtn", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["WebServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/taxi-detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/taxi-detail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n}\n\n.mat-drawer-content {\n  background: #ffffff !important;\n}\n\n.main-content {\n  display: flex;\n  background: #FFFFFF;\n  overflow-x: hidden;\n  overflow-x: auto;\n}\n\n.taxi-details {\n  flex-basis: 60%;\n  margin: 20px;\n  margin-bottom: 10px;\n}\n\n.taxi-reviews {\n  position: -webkit-sticky;\n  position: sticky;\n  flex-basis: 40%;\n  overflow-x: hidden;\n  overflow-x: auto;\n}\n\n.taxi-reviews h3 {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #eee;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 5px;\n  color: #262858;\n  z-index: 2;\n  text-align: center;\n}\n\n.reviews .single-review {\n  background: #D8CACA;\n  margin: 2px;\n  padding: 5px;\n}\n\n.right-sidebar-items {\n  display: flex;\n  flex-direction: column;\n}\n\n.profile .mat-card .mat-card-title, .new-review .mat-card .mat-card-title {\n  text-align: center;\n}\n\n.profile .mat-card .mat-card-content {\n  justify-content: center;\n  margin-left: 100px;\n}\n\n.profile .mat-card .mat-card-actions button {\n  display: flex;\n  justify-content: right;\n  left: 280px;\n}\n\n.example-card {\n  max-width: 100%;\n}\n\n.mat-card-actions button {\n  padding: 5px;\n}\n\n@media (max-width: 769px) {\n  .main-content {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 480px) {\n  .profile .mat-card .mat-card-actions button {\n    left: 200px;\n  }\n\n  .profile .mat-card .mat-card-content {\n    margin-left: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3RheGktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvdGF4aS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VDR0Y7QUFDRjs7QURBQTtFQUNFO0lBQ0UsV0FBQTtFQ0VGOztFREFBO0lBQ0UsaUJBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3RheGktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnRheGktZGV0YWlscyB7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGF4aS1yZXZpZXdzIHtcbiAgcG9zaXRpb246c3RpY2t5O1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnRheGktcmV2aWV3cyBoMyB7XG4gIHBvc2l0aW9uOnN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiNlZWU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICMyNjI4NTg7XG4gIHotaW5kZXg6MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmV2aWV3cyAuc2luZ2xlLXJldmlldyB7XG4gIGJhY2tncm91bmQ6ICNEOENBQ0E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yaWdodC1zaWRlYmFyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSwgIC5uZXctcmV2aWV3IC5tYXQtY2FyZCAubWF0LWNhcmQtdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGxlZnQ6IDI4MHB4O1xufVxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICAgIGxlZnQ6IDIwMHB4O1xuICB9XG4gIC5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIH1cbn1cblxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWF0LWRyYXdlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4udGF4aS1kZXRhaWxzIHtcbiAgZmxleC1iYXNpczogNjAlO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YXhpLXJldmlld3Mge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnRheGktcmV2aWV3cyBoMyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzI2Mjg1ODtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmV2aWV3cyAuc2luZ2xlLXJldmlldyB7XG4gIGJhY2tncm91bmQ6ICNEOENBQ0E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yaWdodC1zaWRlYmFyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSwgLm5ldy1yZXZpZXcgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnByb2ZpbGUgLm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGxlZnQ6IDI4MHB4O1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAubWFpbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucHJvZmlsZSAubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMgYnV0dG9uIHtcbiAgICBsZWZ0OiAyMDBweDtcbiAgfVxuXG4gIC5wcm9maWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/taxi-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/taxi-detail.component.ts ***!
  \****************************************************/
/*! exports provided: TaxiDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiDetailComponent", function() { return TaxiDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _taxi_review_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxi-review-modal.component */ "./src/app/dashboard/taxi-review-modal.component.ts");






var TaxiDetailComponent = /** @class */ (function () {
    function TaxiDetailComponent(route, dialog, webService, router) {
        this.route = route;
        this.dialog = dialog;
        this.webService = webService;
        this.router = router;
        this.pageTitle = 'Taxi Detail';
        this.storage = localStorage || sessionStorage;
    }
    TaxiDetailComponent.prototype.ngOnInit = function () {
        var resolvedData = this.route.snapshot.data.resolvedData;
        this.errorMessage = resolvedData.error;
        this.onTaxiRetrieved(resolvedData.taxi);
        this.currentUser = JSON.parse(this.storage.getItem('currentUser'));
        this.userName = this.currentUser.data.userData.firstName + " " + this.currentUser.data.userData.lastName;
        this.phoneNumber = this.currentUser.data.userData.phoneNumber;
        this.joinedOn = this.currentUser.data.userData.createdAt;
    };
    TaxiDetailComponent.prototype.onTaxiRetrieved = function (taxi) {
        this.taxi = taxi;
        if (this.taxi) {
            this.pageTitle = "Taxi Detail: " + this.taxi.plateNumber;
        }
        else {
            this.pageTitle = 'No taxi found';
        }
    };
    TaxiDetailComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_taxi_review_modal_component__WEBPACK_IMPORTED_MODULE_5__["TaxiReviewModalComponent"], {
            width: '300px',
            data: { taxi: this.taxi }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.animal = result;
        });
    };
    TaxiDetailComponent.prototype.logout = function () {
        var _this = this;
        this.webService.logout().subscribe(function () { return _this.router.navigate(['/login'], { replaceUrl: true }); });
    };
    TaxiDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./taxi-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-detail.component.html"),
            styles: [__webpack_require__(/*! ./taxi-detail.component.scss */ "./src/app/dashboard/taxi-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaxiDetailComponent);
    return TaxiDetailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/taxi-new.component.scss":
/*!***************************************************!*\
  !*** ./src/app/dashboard/taxi-new.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-actions {\n  display: flex;\n  flex-direction: row;\n}\n\n.mat-dialog-title {\n  text-align: center;\n}\n\nform {\n  display: block;\n  overflow-y: auto;\n}\n\n/* Spinner */\n\n.spinner {\n  font-size: 300%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  color: yellow;\n}\n\n.fa-spinner {\n  -webkit-animation: spin 1000ms infinite linear;\n  animation: spin 1000ms infinite linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3RheGktbmV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvdGF4aS1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQSxZQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0ksOENBQUE7RUFDQSxzQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3RheGktbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctYWN0aW9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8qIFNwaW5uZXIgKi9cbi5zcGlubmVyIHtcbiAgZm9udC1zaXplOjMwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OjEwO1xuICBjb2xvcjogeWVsbG93O1xufVxuXG4uZmEtc3Bpbm5lciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cbiIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vKiBTcGlubmVyICovXG4uc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmZhLXNwaW5uZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMDAwbXMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/taxi-new.component.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboard/taxi-new.component.ts ***!
  \*************************************************/
/*! exports provided: TaxiNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiNewComponent", function() { return TaxiNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var TaxiNewComponent = /** @class */ (function () {
    function TaxiNewComponent(builder, dialogRef, data, webService, toastr) {
        this.builder = builder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.webService = webService;
        this.toastr = toastr;
        this.hasRated = false;
        this.progress = 0;
        this.storage = localStorage || sessionStorage;
    }
    TaxiNewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TaxiNewComponent.prototype.hasError = function (field, error) {
        var control = this.formReview.get(field);
        return control.dirty && control.hasError(error);
    };
    TaxiNewComponent.prototype.createNewReview = function (data) {
        var _this = this;
        var formValue = this.formReview.getRawValue();
        var plateNumber = formValue.plateNumber;
        plateNumber = plateNumber.replace(/ +/g, '');
        var rating = formValue.userReview;
        var comment = formValue.comment;
        var image = formValue.taxiImage;
        var model = formValue.model;
        var toReview = {
            taxiPlateNumber: plateNumber,
            userReview: rating,
            userComment: comment,
            userPhoneNumber: data
        };
        this.webService.rate(toReview)
            .subscribe(function (rateRes) {
            if (rateRes.success) {
                _this.loading = true;
                _this.hasRated = true;
                _this.toastr.success("Still working . . ., wait for final verdict");
                _this.webService.taxi({
                    taxiImage: image,
                    plateNumber: plateNumber,
                    model: model
                })
                    .pipe(Object(_services__WEBPACK_IMPORTED_MODULE_4__["uploadProgress"])(function (progress) { return (_this.progress = progress); }), Object(_services__WEBPACK_IMPORTED_MODULE_4__["toResponseBody"])())
                    .subscribe(function (newTaxis) {
                    _this.progress = 0;
                    _this.success = true;
                    _this.loading = false;
                    if (newTaxis.success) {
                        _this.toastr.success("New Taxi Review Successful", 'Thank you');
                    }
                    else {
                        _this.toastr.error("please try again", 'Not Successful');
                    }
                });
            }
            else {
                _this.loading = false;
                _this.toastr.error("please try again", 'Not Successful');
            }
        });
    };
    TaxiNewComponent.prototype.ngOnInit = function () {
        this.formReview = this.builder.group({
            userReview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            plateNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taxiImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('taxiImage', { read: true, static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaxiNewComponent.prototype, "taxiImage", void 0);
    TaxiNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-taxi',
            template: __webpack_require__(/*! raw-loader!./taxi-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-new.component.html"),
            styles: [__webpack_require__(/*! ./taxi-new.component.scss */ "./src/app/dashboard/taxi-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], TaxiNewComponent);
    return TaxiNewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/taxi-review-modal.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/taxi-review-modal.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-actions {\n  display: flex;\n  flex-direction: row;\n}\n\n.mat-dialog-title {\n  text-align: center;\n}\n\nform {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3RheGktcmV2aWV3LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvdGF4aS1yZXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGF4aS1yZXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1hY3Rpb25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/taxi-review-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/taxi-review-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: TaxiReviewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiReviewModalComponent", function() { return TaxiReviewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var TaxiReviewModalComponent = /** @class */ (function () {
    function TaxiReviewModalComponent(builder, dialogRef, data, webService, toastr) {
        this.builder = builder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.webService = webService;
        this.toastr = toastr;
        this.storage = localStorage || sessionStorage;
    }
    TaxiReviewModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TaxiReviewModalComponent.prototype.sendReview = function (data) {
        var _this = this;
        var formValue = this.formReview.getRawValue();
        var rating = formValue.userReview;
        var comment = formValue.comment;
        var makeReview = {
            taxiPlateNumber: data.taxi.plateNumber,
            userReview: rating,
            userComment: comment,
            userPhoneNumber: this.phoneNumber,
        };
        this.webService.rate(makeReview)
            .subscribe(function (rateRes) {
            if (rateRes.success) {
                _this.toastr.success("Your Review was Successful", 'Thank you');
            }
            else {
                _this.toastr.error("please try again", 'Not Successful');
            }
        });
    };
    TaxiReviewModalComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this.storage.getItem('currentUser'));
        this.phoneNumber = this.currentUser.data.userData.phoneNumber;
        this.formReview = this.builder.group({
            userReview: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    TaxiReviewModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-taxi-modal',
            template: __webpack_require__(/*! raw-loader!./taxi-review-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/taxi-review-modal.component.html"),
            styles: [__webpack_require__(/*! ./taxi-review-modal.component.scss */ "./src/app/dashboard/taxi-review-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], TaxiReviewModalComponent);
    return TaxiReviewModalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/taxi.datasource.ts":
/*!**********************************************!*\
  !*** ./src/app/dashboard/taxi.datasource.ts ***!
  \**********************************************/
/*! exports provided: TaxiDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiDataSource", function() { return TaxiDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var TaxiDataSource = /** @class */ (function () {
    function TaxiDataSource(webService) {
        this.webService = webService;
        this.taxiDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading = this.loadingSubject.asObservable();
    }
    TaxiDataSource.prototype.connect = function (collectionViewer) {
        return this.taxiDataSubject.asObservable();
    };
    TaxiDataSource.prototype.disconnect = function (collectionViewer) {
        this.taxiDataSubject.complete();
        this.loadingSubject.complete();
    };
    TaxiDataSource.prototype.loadTaxiData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        this.loadingSubject.next(true);
        this.webService.getTaxiCollection(filter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (taxiData) {
            _this.taxiDataSubject.next(taxiData.data);
        });
    };
    return TaxiDataSource;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.scss":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);\n.file-drop-area {\n  border: 1px dashed #50BDD5;\n  border-radius: 3px;\n  position: relative;\n  width: 450px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 26px 20px 30px;\n  transition: 0.2s;\n}\n.file-drop-area.is-active {\n  background-color: #50BDD5;\n}\n.fake-btn {\n  background-color: #50BDD5;\n  border: 1px solid #a6dae7;\n  border-radius: 3px;\n  padding: 8px 15px;\n  margin-right: 8px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.file-msg {\n  font-size: small;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  max-width: calc(100% - 130px);\n  vertical-align: middle;\n}\n.file-input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  opacity: 0;\n}\n.file-input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFFQUFBO0FBR1I7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDREY7QURJQTtFQUNFLHlCQUFBO0FDREY7QURJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCwzMDAsNzAwKTtcblxuLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL1NhbWlub3UyNC9wZW4va1hFWUdCXG4uZmlsZS1kcm9wLWFyZWEge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzUwQkRENTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjZweCAyMHB4IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmZpbGUtZHJvcC1hcmVhLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEJERDU7XG59XG5cbi5mYWtlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEJERDU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNjYsIDIxOCwgMjMxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZpbGUtbXNnIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMzBweCk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZpbGUtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCwzMDAsNzAwKTtcbi5maWxlLWRyb3AtYXJlYSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTBCREQ1O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyNnB4IDIwcHggMzBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uZmlsZS1kcm9wLWFyZWEuaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQkRENTtcbn1cblxuLmZha2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQkRENTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2ZGFlNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmZpbGUtbXNnIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMzBweCk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5maWxlLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZpbGUtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(host) {
        this.host = host;
        this.file = null;
    }
    FileUploadComponent_1 = FileUploadComponent;
    FileUploadComponent.prototype.emitFiles = function (event) {
        var file = event && event.item(0);
        this.onChange(file);
        this.file = file;
    };
    FileUploadComponent.prototype.writeValue = function (value) {
        // clear file input
        this.host.nativeElement.value = '';
        this.file = null;
    };
    // tslint:disable-next-line: ban-types
    FileUploadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    // tslint:disable-next-line: ban-types
    FileUploadComponent.prototype.registerOnTouched = function (fn) {
    };
    var FileUploadComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "progress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event.target.files']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FileList]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FileUploadComponent.prototype, "emitFiles", null);
    FileUploadComponent = FileUploadComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: FileUploadComponent_1,
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/file-upload/file-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Anton&display=swap\");\narticle {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.container {\n  background: url('banner-img2.png') no-repeat;\n  height: 100vh;\n  background-size: contain;\n  background-position: right;\n  margin-top: 4rem;\n  background-size: 80%;\n  position: fixed;\n}\n.header {\n  font-family: Anton;\n  font-size: 2rem;\n  color: #ecab27;\n  margin: 4rem;\n  text-align: center;\n  position: absolute;\n}\n.sub-heading {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 1.2rem;\n  color: white;\n}\nfooter {\n  flex-shrink: 0;\n  background: #ecab27;\n  margin: 0;\n  padding: 0;\n  justify-self: end;\n  margin-top: 42rem;\n}\n/*\n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n/*\n  ##Device = Laptops, Desktops\n  ##Screen = B/w 1025px to 1280px\n*/\n/*\n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = B/w 768px to 1024px\n*/\n@media (min-width: 767px) and (max-width: 1024px) {\n  .container {\n    background-position: right;\n    margin-top: 12rem;\n    background-size: 80%;\n  }\n\n  .header {\n    font-size: 1.8rem;\n    margin-top: 6rem;\n    margin-left: 0;\n    padding: 1rem;\n    text-align: left;\n    background: #f7f6f4;\n    opacity: 0.8;\n    border-radius: 5px;\n    border: #f5c667 solid 0.5px;\n  }\n\n  .sub-heading {\n    font-size: 0.9rem;\n    color: #000000;\n  }\n\n  footer {\n    margin-top: 54rem;\n  }\n}\n/*\n  ##Device = Tablets, Ipads (landscape)\n  ##Screen = B/w 768px to 1024px\n*/\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n  .container {\n    background-position: right;\n    margin-top: -8rem;\n    background-size: 80%;\n  }\n}\n/*\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 767px) {\n  .container {\n    background-position: right;\n    margin-top: -4rem;\n    background-size: 80%;\n  }\n\n  .header {\n    font-size: 1.8rem;\n    margin-top: 14rem;\n    margin-left: 0;\n    padding: 1rem;\n    text-align: left;\n    background: #f7f6f4;\n    opacity: 0.8;\n    border-radius: 5px;\n    border: #f5c667 solid 0.5px;\n  }\n\n  .sub-heading {\n    font-size: 0.9rem;\n    color: #000000;\n  }\n}\n/*\n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n@media (min-width: 320px) and (max-width: 480px) {\n  .container {\n    background-position: right;\n    margin-top: 8rem;\n    background-size: 80%;\n  }\n\n  .header {\n    font-size: 1.4rem;\n    margin-top: 4rem;\n    margin-left: 0;\n    padding: 1rem;\n    text-align: left;\n    background: #f7f6f4;\n    opacity: 0.9;\n    border-radius: 5px;\n    border: #f5c667 solid 0.5px;\n  }\n\n  .sub-heading {\n    font-size: 0.8rem;\n    color: #000000;\n  }\n\n  footer {\n    margin-top: 33rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFDUjtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBRUUsNENBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSw2RUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdBOzs7Q0FBQTtBQVdBOzs7Q0FBQTtBQVdBOzs7Q0FBQTtBQUtBO0VBRUU7SUFDRSwwQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNoQkY7O0VEbUJBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDJCQUFBO0VDaEJGOztFRGtCQTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQ2ZGOztFRGtCQTtJQUNFLGlCQUFBO0VDZkY7QUFDRjtBRG1CQTs7O0NBQUE7QUFLQTtFQUVFO0lBQ0UsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDbkJGO0FBQ0Y7QUR1QkE7OztDQUFBO0FBS0E7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7RUN0QkY7O0VEd0JBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VDckJGO0FBQ0Y7QUR5QkE7OztDQUFBO0FBS0E7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7RUN4QkY7O0VEMEJBO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VDdkJGOztFRHlCQTtJQUNFLGlCQUFBO0VDdEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFudG9uJmRpc3BsYXk9c3dhcCcpO1xuYXJ0aWNsZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgLy8gZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyLWltZzIucG5nJykgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBBbnRvbjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogI2VjYWIyNztcbiAgbWFyZ2luOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnN1Yi1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5mb290ZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogI2VjYWIyNztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgbWFyZ2luLXRvcDogNDJyZW07XG59XG5cbi8qXG4gICMjRGV2aWNlID0gRGVza3RvcHNcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcblxuICAvL0NTU1xuXG59XG5cbi8qXG4gICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcbiAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuXG4gIC8vQ1NTXG5cbn1cblxuLypcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y2ZjQ7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogI2Y1YzY2NyBzb2xpZCAuNXB4O1xuICB9XG4gIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogNTRyZW07XG4gIH1cblxufVxuXG4vKlxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC04cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG5cbn1cblxuLypcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC00cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luLXRvcDogMTRyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y2ZjQ7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogI2Y1YzY2NyBzb2xpZCAuNXB4O1xuICB9XG4gIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuXG59XG5cbi8qXG4gICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XG4qL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDhyZW07XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmNmY0O1xuICAgIG9wYWNpdHk6IC45O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6ICNmNWM2Njcgc29saWQgLjVweDtcbiAgfVxuICAuc3ViLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIGZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMzNyZW07XG4gIH1cbn1cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbnRvbiZkaXNwbGF5PXN3YXBcIik7XG5hcnRpY2xlIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2Jhbm5lci1pbWcyLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oZWFkZXIge1xuICBmb250LWZhbWlseTogQW50b247XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNlY2FiMjc7XG4gIG1hcmdpbjogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zdWItaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdpbGwgU2Fuc1wiLCBcIkdpbGwgU2FucyBNVFwiLCBDYWxpYnJpLCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5mb290ZXIge1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogI2VjYWIyNztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgbWFyZ2luLXRvcDogNDJyZW07XG59XG5cbi8qXG4gICMjRGV2aWNlID0gRGVza3RvcHNcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG4vKlxuICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcbiovXG4vKlxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjZmNDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogI2Y1YzY2NyBzb2xpZCAwLjVweDtcbiAgfVxuXG4gIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICBmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDU0cmVtO1xuICB9XG59XG4vKlxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC04cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG59XG4vKlxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtNHJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi10b3A6IDE0cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmNmY0O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAjZjVjNjY3IHNvbGlkIDAuNXB4O1xuICB9XG5cbiAgLnN1Yi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxufVxuLypcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA4cmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjZmNDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogI2Y1YzY2NyBzb2xpZCAwLjVweDtcbiAgfVxuXG4gIC5zdWItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICBmb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMzcmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ios-install/ios-install.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ios-install/ios-install.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  opacity: 0.8;\n}\n\n.content {\n  margin: 0.5em;\n  text-align: center;\n}\n\n.full-width {\n  margin-top: 1em;\n  width: 100%;\n  text-align: center;\n}\n\n.link-close {\n  color: red;\n  font-variant-caps: all-petite-caps;\n  font-weight: bold;\n}\n\n.btn-close {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3Y5LWJlYXJzLXRlYW0tMzEvY2xpZW50L3NyYy9hcHAvaW9zLWluc3RhbGwvaW9zLWluc3RhbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lvcy1pbnN0YWxsL2lvcy1pbnN0YWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvaW9zLWluc3RhbGwvaW9zLWluc3RhbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZ1bGwtd2lkdGgge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGluay1jbG9zZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG59XG4iLCI6aG9zdCB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGluay1jbG9zZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgcmlnaHQ6IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ios-install/ios-install.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ios-install/ios-install.component.ts ***!
  \******************************************************/
/*! exports provided: IosInstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosInstallComponent", function() { return IosInstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var IosInstallComponent = /** @class */ (function () {
    function IosInstallComponent(snackBarRef) {
        this.snackBarRef = snackBarRef;
    }
    IosInstallComponent.prototype.ngOnInit = function () {
    };
    IosInstallComponent.prototype.close = function () {
        this.snackBarRef.dismiss();
    };
    IosInstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ios-install',
            template: __webpack_require__(/*! raw-loader!./ios-install.component.html */ "./node_modules/raw-loader/index.js!./src/app/ios-install/ios-install.component.html"),
            styles: [__webpack_require__(/*! ./ios-install.component.scss */ "./src/app/ios-install/ios-install.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"]])
    ], IosInstallComponent);
    return IosInstallComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progress = 0;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/progress/progress.component.html"),
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-service.service */ "./src/app/services/web-service.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            // check if route is restricted by role isAdmin
            if (route.data.roles && route.data.roles.indexOf(this.authService.credentials.data.userData.isAdmin) === -1) {
                // role not authorized so redirect to home page
                this.router.navigate(['/login']);
                return false;
            }
            // authorized so return true
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _web_service_service__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-service.service */ "./src/app/services/web-service.service.ts");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(webService, router) {
        this.webService = webService;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout on unauthorized response
                _this.webService.logout();
                // location.reload(true);
                _this.router.navigate(['/login']);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service_service__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: WebServiceService, toFormData, uploadProgress, toResponseBody, AuthGuard, ErrorInterceptor, SafariBuddyInterceptor, WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-service.service */ "./src/app/services/web-service.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebServiceService", function() { return _web_service_service__WEBPACK_IMPORTED_MODULE_0__["WebServiceService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFormData", function() { return _web_service_service__WEBPACK_IMPORTED_MODULE_0__["toFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadProgress", function() { return _web_service_service__WEBPACK_IMPORTED_MODULE_0__["uploadProgress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toResponseBody", function() { return _web_service_service__WEBPACK_IMPORTED_MODULE_0__["toResponseBody"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/services/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _safariBuddy_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safariBuddy.interceptor */ "./src/app/services/safariBuddy.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafariBuddyInterceptor", function() { return _safariBuddy_interceptor__WEBPACK_IMPORTED_MODULE_3__["SafariBuddyInterceptor"]; });

/* harmony import */ var _windows_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./windows.service */ "./src/app/services/windows.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _windows_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"]; });








/***/ }),

/***/ "./src/app/services/safariBuddy.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/safariBuddy.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: SafariBuddyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariBuddyInterceptor", function() { return SafariBuddyInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-service.service */ "./src/app/services/web-service.service.ts");



var SafariBuddyInterceptor = /** @class */ (function () {
    function SafariBuddyInterceptor(inj) {
        this.auth = inj.get(_web_service_service__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]);
    }
    SafariBuddyInterceptor.prototype.intercept = function (request, next) {
        // check if the current user is logged in
        var storage = localStorage || sessionStorage;
        var currentUser = JSON.parse(storage.getItem('currentUser'));
        if (currentUser) {
            if (currentUser.success && currentUser.data.token) {
                // clone the incoming request and add JWT token in the cloned request's Authorization Header
                request = request.clone({
                    setHeaders: {
                        'x-auth-token': currentUser.data.token
                    }
                });
            }
        }
        // handle any other requests which went unhandled
        return next.handle(request);
    };
    SafariBuddyInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], SafariBuddyInterceptor);
    return SafariBuddyInterceptor;
}());



/***/ }),

/***/ "./src/app/services/taxi-resolver.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/taxi-resolver.service.ts ***!
  \***************************************************/
/*! exports provided: TaxiResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiResolver", function() { return TaxiResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _web_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-service.service */ "./src/app/services/web-service.service.ts");





var TaxiResolver = /** @class */ (function () {
    function TaxiResolver(taxiService) {
        this.taxiService = taxiService;
    }
    TaxiResolver.prototype.resolve = function (route, state) {
        var numberPlate = route.paramMap.get('plateNumber');
        if (numberPlate === null || numberPlate === undefined) {
            var message = "Taxi with nummber plate " + numberPlate + " doesn't exist yet";
            console.error('error', message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ taxi: null, error: message });
        }
        return this.taxiService.getTaxi(numberPlate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (taxi) {
            return { taxi: taxi };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var message = "Failed to get taxi error: " + error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ taxi: null, error: message });
        }));
    };
    TaxiResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service_service__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"]])
    ], TaxiResolver);
    return TaxiResolver;
}());



/***/ }),

/***/ "./src/app/services/web-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/web-service.service.ts ***!
  \*************************************************/
/*! exports provided: WebServiceService, toFormData, uploadProgress, toResponseBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServiceService", function() { return WebServiceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormData", function() { return toFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProgress", function() { return uploadProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toResponseBody", function() { return toResponseBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");






var credentialsKey = 'currentUser';
var WebServiceService = /** @class */ (function () {
    function WebServiceService(http) {
        this.http = http;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.Role = {
            Admin: this.admin,
            Client: this.client
        };
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.isAuthenticated());
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    Object.defineProperty(WebServiceService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // login service
    WebServiceService.prototype.login = function (context) {
        var _this = this;
        var user = {
            phoneNumber: context.phoneNumber,
            password: context.password
        };
        return this.http.post(this.url + "/v1/login", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (userResponse) {
            _this.setCredentials(userResponse, context.remember);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(userResponse);
        }));
    };
    // register service
    WebServiceService.prototype.register = function (user) {
        return this.http.post(this.url + "/v1/users", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (userResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(userResponse);
        }));
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    WebServiceService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
    };
    // post review
    WebServiceService.prototype.rate = function (userRating) {
        return this.http.post(this.url + "/v1/review", userRating)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (rating) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(rating);
        }));
    };
    // post review
    WebServiceService.prototype.taxi = function (taxi) {
        return this.http.post(this.url + "/v1/taxis", toFormData(taxi), {
            reportProgress: true,
            observe: 'events'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newTaxi) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(newTaxi);
        }));
    };
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    WebServiceService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    Object.defineProperty(WebServiceService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    WebServiceService.prototype.setCredentials = function (user, remember) {
        this._credentials = user || null;
        if (user) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(user));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    };
    WebServiceService.prototype.getTaxiCollection = function (filter) {
        if (filter === void 0) { filter = ''; }
        return this.http.get(this.url + "/v1/taxis", {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('plateNumber', filter)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data);
        }));
    };
    WebServiceService.prototype.getTaxi = function (numberPlate) {
        if (numberPlate === null || numberPlate === undefined) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.initializeTaxi());
        }
        var url = this.url + "/v1/taxis/" + numberPlate;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WebServiceService.prototype.initializeTaxi = function () {
        // Return an initialized object
        return {
            averageReview: null,
            imageURL: null,
            imageID: null,
            plateNumber: null,
            model: null,
            createdAt: null,
            updatedAt: null,
            review: null
        };
    };
    WebServiceService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    WebServiceService.prototype.notify = function (type, message, from, align) {
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: type,
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    WebServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebServiceService);
    return WebServiceService;
}());

function toFormData(formValue) {
    var e_1, _a;
    var formData = new FormData();
    try {
        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(formValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = formValue[key];
            formData.append(key, value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return formData;
}
function uploadProgress(cb) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
            cb(Math.round((100 * event.loaded) / event.total));
        }
    });
}
function toResponseBody() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
}


/***/ }),

/***/ "./src/app/services/windows.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/windows.service.ts ***!
  \*********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/shared/generic-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/generic-validator.ts ***!
  \*********************************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return GenericValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = /** @class */ (function () {
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    GenericValidator.passwordPatternValidator = function (regex, error) {
        return function (control) {
            if (control.dirty || control.touched) {
                var valid = regex.test(control.value);
                return valid ? null : error;
            }
            else if (!control.value) {
                return null;
            }
        };
    };
    GenericValidator.matchPasswordValidator = function (control) {
        var password = control.get('password').value;
        var confirmPassword = control.get('confirmPassword').value;
        var touchedConfirm = control.get('confirmPassword').touched || control.get('confirmPassword').dirty;
        if (touchedConfirm) {
            if (password !== confirmPassword) {
                control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
            }
        }
    };
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    GenericValidator.prototype.getErrorCount = function (container) {
        var errorCount = 0;
        for (var controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                if (container.controls[controlKey].errors) {
                    errorCount += Object.keys(container.controls[controlKey].errors).length;
                }
            }
        }
        return errorCount;
    };
    return GenericValidator;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: GenericValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-validator */ "./src/app/shared/generic-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericValidator", function() { return _generic_validator__WEBPACK_IMPORTED_MODULE_0__["GenericValidator"]; });




/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyAp98Hv6MDk0wSEbs1cYATkVdKzw_xiaLo',
        authDomain: 'suredoctor-c20d0.firebaseapp.com',
        databaseURL: 'https://suredoctor-c20d0.firebaseio.com',
        projectId: 'suredoctor-c20d0',
        storageBucket: 'suredoctor-c20d0.appspot.com',
        messagingSenderId: '852191743228',
        appId: '1:852191743228:web:298037274ca45d55'
    },
    url: 'https://taxis-rider.herokuapp.com/api'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAp98Hv6MDk0wSEbs1cYATkVdKzw_xiaLo',
        authDomain: 'suredoctor-c20d0.firebaseapp.com',
        databaseURL: 'https://suredoctor-c20d0.firebaseio.com',
        projectId: 'suredoctor-c20d0',
        storageBucket: 'suredoctor-c20d0.appspot.com',
        messagingSenderId: '852191743228',
        appId: '1:852191743228:web:298037274ca45d55'
    },
    url: 'https://taxis-rider.herokuapp.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");





if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Documents/v9-bears-team-31/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map