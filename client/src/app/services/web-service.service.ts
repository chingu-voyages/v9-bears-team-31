import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { User, Taxi } from './model';
import { LoginContext } from './model';

const credentialsKey = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  admin: boolean;
  client: boolean;

  Role = {
    Admin: this.admin,
    Client: this.client
  };

  private _credentials: User | null;

  constructor(private http: HttpClient) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
   }

  // login service
  login(context: LoginContext): Observable<any> {
    const user = {
      phoneNumber: context.phoneNumber,
      password: context.password
    };

    return this.http.post<any>('http://127.0.0.1:3300/api/v1/login', user)
      .pipe(
        tap((userResponse: any) => {
          this.setCredentials(userResponse, context.remember);
          return of(userResponse);
        })
      );
  }

  // register service
  register(user: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:3300/api/v1/users', user)
      .pipe(
        tap((userResponse: any) => {
          return of(userResponse);
        })
      );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): User | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  private setCredentials(user?: User, remember?: boolean) {
    this._credentials = user || null;
    if (user) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }

  getTaxiCollection(filter = '' ): Observable<any> {
    console.log('filter', filter);

    return this.http.get<any>('http://127.0.0.1:3300/api/v1/taxis', {
      params: new HttpParams()
        .set('plateNumber', filter)
    })
      .pipe(
        tap((data: any) => {
          return of(data);
        })
      );
  }

  getTaxi(numberPlate: string): Observable<Taxi> {
    if (numberPlate === null || numberPlate === undefined) {
      return of(this.initializeTaxi());
    }
    const url = `http://127.0.0.1:3300/api/v1/taxis/${numberPlate}`;
    return this.http.get<Taxi>(url)
      .pipe(
        tap(data => of(data)),
        catchError(this.handleError)
      );
  }

  private initializeTaxi(): Taxi {
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
  }

  private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
