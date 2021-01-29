import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';


import { ReactiveFormsModule } from '@angular/forms';
import { ContactMapComponent } from './components/contact-map/contact-map.component';

import { SharedModule } from '../shared/shared.module';

import { GMapModule } from 'primeng/gmap';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }
  }];

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactMapComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GMapModule,
    SharedModule, // To use shared function .ie. Title
    RouterModule.forChild(routes)
  ],

  exports: [ContactFormComponent]

})
export class ContactModule { }
