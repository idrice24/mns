import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { CardModule } from 'primeng/card';
import { ContactModule } from '../contact/contact.module';

const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    //CoreModule,
    // CardModule,
    // ContactModule, // Due to app-contact-form component in home
    RouterModule.forChild(authRoutes) // imports router def for this module
  ],
  exports: [
    RouterModule // to make auth routes externally
  ]
})
export class AuthModule { }
