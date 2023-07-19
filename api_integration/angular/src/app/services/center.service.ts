import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, EMPTY } from 'rxjs';
import { Center } from '../center';
import { CenterList } from '../center-list';

@Injectable({
  providedIn: 'root',
})
export class CenterService {
  constructor(private _http: HttpClient) {}

  addCenter(data: Center): Observable<Center> {
    // TODO implement method
    return EMPTY;
  }

  updateCenter(id: string, data: Center): Observable<Center> {
    // TODO implement method
    return EMPTY;
  }

  getCenterList(): Observable<CenterList> {
    // TODO implement method
    return EMPTY;
  }

  deleteCenter(id: string): Observable<void> {
    // TODO implement method
    return EMPTY;
  }
}