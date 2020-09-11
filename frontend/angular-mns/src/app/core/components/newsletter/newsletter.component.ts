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
  Customer: Customer[];
  _customerService: any;
  constructor(_customerService : CustomerService ) { }
 getCustomers(): void{
   this._customerService.getAllCustomers()
   .subscribe( ( customerData ) => {this.Customer = customerData, console.log( customerData );}, Error, ( error ) =>{
     console.log( onmessage, error);
    });
 }

  ngOnInit(): void {
    this.getCustomers();
  }


}
