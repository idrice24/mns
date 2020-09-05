import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnsNavbarComponent } from './components/mns-navbar/mns-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [MnsNavbarComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [MnsNavbarComponent]
})
export class CoreModule { }
