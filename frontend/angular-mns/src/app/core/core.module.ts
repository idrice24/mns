import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [

    HomeComponent,
    LoginComponent,
    AboutComponent,
    NewsletterComponent,
    ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [

    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent]
})
export class CoreModule { }
