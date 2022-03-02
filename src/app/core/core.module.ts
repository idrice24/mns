import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryComponent } from '../auth/components/registry/registry.component';
import { SearchModule } from '../search/search.module';
import { SharedModule } from '../shared/shared.module';
import { AssociationModule } from '../association/association.module';
import { ContactModule } from '../contact/contact.module';
import { CardModule } from 'primeng/card';
import { ProductModule } from '../product/product.module';
@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // Links will not works important!!
    FormsModule, // Form will not works important!!
    ReactiveFormsModule, // Form will not works important!!
    SearchModule,
    SharedModule,
    CardModule,
    AssociationModule, // Due to newletter component in home important!!
    ContactModule, // Due to app-contact-form component in home
    ProductModule // Due to app-product-landing-view
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
