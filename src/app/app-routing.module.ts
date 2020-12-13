// [Ref]: https://angular.io/guide/router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RegistryComponent } from './core/components/registry/registry.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'association',
    loadChildren: () => import('./association/association.module').then(m => m.AssociationModule)

  },
  {
    path: 'posts',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)

  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'shoppings',
    loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)
  },
  { path: 'login', component: LoginComponent }, // @Idrice: to move to authModule
  { path: 'registry', component: RegistryComponent },  // @Idrice: to move to authModule
  { path: '**', component: PageNotFoundComponent }
];
// configures NgModule imports and exports
// ,  { enableTracing: true } // <-- debugging purposes only
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
