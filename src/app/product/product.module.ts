import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ProductLandingViewComponent } from './components/product-landing-view/product-landing-view.component';

import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'products', component: ProductListComponent, data: { animation: 'ProductsPage' } },
  // { path: ':id', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductLandingViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, //  used common func i.e to display messages in an overlay.
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ProductLandingViewComponent // to use it outside of this module
  ]
})
export class ProductModule { }
