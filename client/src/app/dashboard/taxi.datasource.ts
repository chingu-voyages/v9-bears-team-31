import { WebServiceService } from '../services';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';


export class TaxiDataSource implements DataSource<any> {
  private taxiDataSubject = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading = this.loadingSubject.asObservable();

  constructor(private webService: WebServiceService) {}

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.taxiDataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.taxiDataSubject.complete();
    this.loadingSubject.complete();
  }

  loadTaxiData(page = 0, limit = 20, filter = '') {
    this.loadingSubject.next(true);
    this.webService.getTaxiCollection(page, limit, filter)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((taxiData: any) => {
        this.taxiDataSubject.next(taxiData.data);
      }
      );
  }

}
