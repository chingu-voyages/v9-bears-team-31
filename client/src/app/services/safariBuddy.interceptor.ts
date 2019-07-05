import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class SafariBuddyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // check if the current user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.success && currentUser.data.token) {
      // clone the incoming request and add JWT token in the cloned request's Authorization Header
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${currentUser.data.token}`
          }
      });
    }

    // handle any other requests which went unhandled
    return next.handle(request);
  }
}
