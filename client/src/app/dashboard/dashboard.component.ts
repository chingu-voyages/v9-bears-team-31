import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { WebServiceService } from '../services';
import {MatPaginator, MatTableDataSource, MatSort, Sort, MatPaginatorIntl} from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
