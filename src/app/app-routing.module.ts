// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

import { AboutComponent } from './core/components/about/about.component';
import { NewsletterComponent } from './core/components/newsletter/newsletter.component';

import { ContactComponent } from './core/components/contact/contact.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { GalleryComponent } from './media/components/gallery/gallery.component';
import { TopicDetailComponent } from './blog/components/topic-detail/topic-detail.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RegistryComponent } from './core/components/registry/registry.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogListComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
  },
  { path: 'topic/:id', component: TopicDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// configures NgModule imports and exports
// ,  { enableTracing: true } // <-- debugging purposes only
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
