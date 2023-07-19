import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CenterService } from '../services/center.service';
import { SnackBarService } from '../services/snackbar.service';
import { Subject } from "rxjs";
import { Center } from '../center';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.scss']
})
export class CenterListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'staff',
    'action',
  ];
  dataSource!: MatTableDataSource<Center>;

  @Input() reloadData: Subject<boolean> = new Subject();
  @Output() editEvent: EventEmitter<Center> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  total: number = 0;

  constructor(
    private _centerService: CenterService,
    private _snackbarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    // TODO get data on init, handle reload and page/sorting changes
  }

  emitEditEvent(row: Center) {
    // TODO handle edit event
  }

  getCenterList() {
    // TODO retrieve data and update table
  }

  deleteCenter(id: string) {
    this._centerService.deleteCenter(id).subscribe({
      next: (res) => {
        this._snackbarService.openSnackBar('Command center was deleted.');
        // TODO retrieve data
      },
      error: console.log,
    });
  }
}
