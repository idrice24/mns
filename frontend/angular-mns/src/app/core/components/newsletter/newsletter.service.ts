// https {HttpClient, Response, RequestOptions, Headers } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, throwError, concat, of } from 'rxjs';
import { Customer } from './newsletter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http2SecureServer } from 'http2';
import { HttpMethod } from 'blocking-proxy/built/lib/webdriver_commands';

export class NewsletterService{}

export class CustomerService{// tslint:disable-next-line: indent

 constructor(private _httpService){}
      getAllCustomers(): Observable<Customer[]>{
      return 	this._httpService.get()
      .map((response: Response) => response.json())
      .catch(this.handleError);

      }
  private handleError(error: Response){
  return Observable.throw(error);
  }
}
