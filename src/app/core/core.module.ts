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
    SearchModule,
    SharedModule,
    AssociationModule // Due to newletter component in home important!!
  ],
  exports: [
    HomeComponent,
    LoginComponent,

    PageNotFoundComponent,
    RegistryComponent

  ]
})
export class CoreModule { }
