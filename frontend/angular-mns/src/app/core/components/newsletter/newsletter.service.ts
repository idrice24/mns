// https {HttpClient, Response, RequestOptions, Headers } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable , concat, of } from 'rxjs';
import { Customer } from './newsletter';


export class NewsletterService{}

export class CustomerService{// tslint:disable-next-line: indent

 constructor(private http2Service){}
      getAllCustomers(): Observable<Customer[]>{
      return 	this.http2Service.get()
      .map((response: Response) => response.json())
      .catch(this.handleError);

      }
  private handleError(error: Response){
  // tslint:disable-next-line: deprecation
  return Observable.throw(error);
  }
}
