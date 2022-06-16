import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ICountriesMasterResponseData } from './common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', '*'); 
  }

  public covid19Reports() : Observable<ICountriesMasterResponseData[]>{

    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get<any[]>("http://localhost:8885/countries/country?page=0");
  }
  
}
