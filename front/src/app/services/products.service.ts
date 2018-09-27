import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from '../config/globals';
import { Params } from '@angular/router';
import { Token } from '../models/token';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    public url: string;
    public token: Token;

    constructor(
        public _http: HttpClient
    ) {

        this.url = GLOBAL.url;
    }

    saveProducts(products): Observable<any> {
 
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/api/products',JSON.stringify(products), {headers: headers});
    }

    listProducts(): Observable<any> {
        if (localStorage.getItem('token')) {
             this.token = new Token(localStorage.getItem('token'));
            
             let headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') );

             return this._http.get(this.url + '/api/products',{headers: headers});
         } else {
             return null;
         }
     }
  }