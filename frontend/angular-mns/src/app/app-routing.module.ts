// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ActivityCenterComponent } from './activity/components/activity-center/activity-center.component';
import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-activity-center', component: ActivityCenterComponent },
  { path: 'app-about', component: AboutComponent },
  { path: 'app-newsletter', component: NewsletterComponent }
  // { path: '**', redirectTo: 'home' }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
