
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WebServiceService } from './web-service.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private webService: WebServiceService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          if (err.status === 401) {
            // auto logout on unauthorized response
            this.webService.logout();
            // location.reload(true);
            this.router.navigate(['/login']);
          }

          const error = err.error.message || err.statusText;
          return throwError(error);

        })
      );
  }

}
