import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { TaxiResolved } from './model';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaxiResolver implements Resolve<TaxiResolved> {
  constructor(private taxiService: WebServiceService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<TaxiResolved> {
    const numberPlate = route.paramMap.get('plateNumber');
    if (numberPlate === null || numberPlate === undefined) {
      const message = `Taxi with nummber plate ${numberPlate} doesn't exist yet`;
      console.error('error', message);
      return of({taxi: null, error: message});
    }

    return this.taxiService.getTaxi(numberPlate)
      .pipe(
        map(taxi => {
          return {taxi};
        }),
        catchError(error => {
          const message = `Failed to get taxi error: ${error}`;
          return of({taxi: null, error: message});
        })
      )
    }
}
