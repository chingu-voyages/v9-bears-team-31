import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http: HttpClient) { }

  // login service
  login(user: any): Observable<any> {
    return this.http.post<any>('', user)
      .pipe(
        tap((userResponse: any) => {
          if (userResponse && userResponse.token) {
            localStorage.setItem('currentUser', JSON.stringify(userResponse));
          }
          return userResponse;
        })
      );
  }

  // register service
  register(user: any): Observable<any> {
    return this.http.post<any>('', user)
      .pipe(
        tap((userResponse: any) => {
          if (userResponse && userResponse.token) {
            localStorage.setItem('currentUser', JSON.stringify(userResponse));
          }
          return userResponse;
        })
      );
  }

  // logout user
  logout(): void {
    localStorage.removeItem('currentUser');
  }

}
