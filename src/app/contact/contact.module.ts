import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToastModule } from 'primeng/toast';

import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: ContactComponent
  }];

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],

})
export class ContactModule { }
