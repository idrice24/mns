// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

import { ActivityCenterComponent } from './activity/components/activity-center/activity-center.component';
import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './core/components/contact/contact.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activity-center', component: ActivityCenterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },

  { path: '**', redirectTo: 'home' }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes
    , { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
