import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebServiceService } from './web-service.service';


@Injectable()
export class SafariBuddyInterceptor implements HttpInterceptor {

  auth: any;
  constructor(inj: Injector) {
    this.auth = inj.get(WebServiceService);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // check if the current user is logged in
    const storage = localStorage || sessionStorage;
    const currentUser = JSON.parse(storage.getItem('currentUser'));
    console.log('current user', currentUser);
    if (currentUser) {
      if (currentUser.success && currentUser.data.token) {
      // clone the incoming request and add JWT token in the cloned request's Authorization Header
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${currentUser.data.token}`
          }
      });
    }
    }

    // handle any other requests which went unhandled
    return next.handle(request);
  }
}
