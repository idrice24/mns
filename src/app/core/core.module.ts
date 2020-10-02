import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistryComponent } from './components/registry/registry.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    RegistryComponent

  ],

  imports: [
    CommonModule,
    RouterModule, // Links will not works important!!
    FormsModule, // Form will not works important!!
    ReactiveFormsModule// Form will not works important!!
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
