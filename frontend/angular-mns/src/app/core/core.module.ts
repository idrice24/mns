import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnsNavbarComponent } from './components/mns-navbar/mns-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    MnsNavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    NewsletterComponent,
    ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MnsNavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent]
})
export class CoreModule { }
