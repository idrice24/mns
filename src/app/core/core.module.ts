import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryComponent } from './components/registry/registry.component';


import { SearchModule } from '../search/search.module';
import { SharedModule } from '../shared/shared.module';
import { AssociationModule } from '../association/association.module';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ContactModule } from '../contact/contact.module';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,

    PageNotFoundComponent,
    RegistryComponent


  ],

  imports: [
    CommonModule,
    RouterModule, // Links will not works important!!
    FormsModule, // Form will not works important!!
    ReactiveFormsModule, // Form will not works important!!
    ButtonModule, // Due to Rounded and Outlined Icon Buttons
    RippleModule, // Due to pRippe in home.html
    SearchModule,
    SharedModule,
    InputTextModule,
    CardModule,
    PasswordModule, // Password would not works fine
    AssociationModule, // Due to newletter component in home important!!
    ContactModule, // Due to app-contact-form component in home
    ProductModule // Due to app-product-landing-view
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistryComponent

  ]
})
export class CoreModule { }
