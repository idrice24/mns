import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CustomerService } from './newsletter.service';

import { Customer } from './newsletter';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  		getCustomers();
  }


}

export class CustomerComponent {
	
	customers: Customer[];
	constructor(private _customerService: CustomerService){}

	getCustomers(): void{
	this._customerService.getAllCustomers()
	.subscribe((customerData) => { this.customers = customerData, console.log(customerData)}, (error) => {
		console.log(error);
	});
	}
}