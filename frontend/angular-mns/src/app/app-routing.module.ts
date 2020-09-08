// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ActivityCenterComponent } from './activity/components/activity-center/activity-center.component';
import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './core/components/contact/contact.component';

// sets up routes constant where you define your routes
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-activity-center', component: ActivityCenterComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-newsletter', component: NewsletterComponent },
  { path: '**', redirectTo: 'app-home' }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes
    //  { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
