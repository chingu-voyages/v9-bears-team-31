import { Component, OnInit, AfterViewInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatButton } from '@angular/material';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import {FormGroup, FormBuilder} from '@angular/forms';
import { WebServiceService } from '../services';
import { TaxiDataSource } from './taxi.datasource';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild('myBtn', { read: true, static: false }) myBtn: any;

  taxiDataSource: TaxiDataSource;
  searchForm: FormGroup;

  displayedColumns: string[] = ['image', 'plateNumber', 'review'];

  constructor(private webService: WebServiceService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.taxiDataSource = new TaxiDataSource(this.webService);
    this.taxiDataSource.loadTaxiData();

    this.searchForm = this.builder.group({
      searchInput: ''
    });
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.loadTaxiDataPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
          tap(() => this.loadTaxiDataPage())
      )
      .subscribe();
  }

  loadTaxiDataPage() {
    const searchValue = this.searchForm.getRawValue();
    this.taxiDataSource.loadTaxiData(this.input.nativeElement.value);
  }

}
