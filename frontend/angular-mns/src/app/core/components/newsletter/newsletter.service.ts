import {Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './newsletter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class NewsletterService{}

export class CustomerService{
	constructor(private _httpService: Http){}
	getAllCustomers(): Observable<Customer[]>{
		return 	this._httpService.get()
			.map((response: Response) => response.json())
			.catch(this.handleError);

	}

	private handleError(error: Response){
	return Observable.throw(error);
	}
}