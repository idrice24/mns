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
  customerService: any;
  constructor( customerService: CustomerService ) { }
 getCustomers(): void{
   this.customerService.getAllCustomers()
   .subscribe( ( customerData ) => {this.Customer = customerData, console.log( customerData ); }, ( error: any ) => {
     console.log(error);
    });
 }

  ngOnInit(): void {
    this.getCustomers();
  }


}
