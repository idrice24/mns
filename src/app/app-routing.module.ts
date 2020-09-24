// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';

import { ContactComponent } from './core/components/contact/contact.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
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
