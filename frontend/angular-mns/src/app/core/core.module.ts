import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterService } from './components/newsletter/newsletter.service';
import { CmsComponent } from './components/cms/cms.component';


@NgModule({
  declarations: [

    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    CmsComponent
    ],

  imports: [
    CommonModule
  ],
  providers: [NewsletterService],
  exports: [

    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    CmsComponent]
})
 export class CoreModule { }
