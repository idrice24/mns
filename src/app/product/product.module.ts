import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';

import { ProductLandingViewComponent } from './components/product-landing-view/product-landing-view.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  //  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductLandingViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    CardModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule, // To use p-button in html file
    FieldsetModule,
    ListboxModule,
    CarouselModule, // To use p-carousel in html file
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ProductLandingViewComponent // to use it outside of this module
  ]
})
export class ProductModule { }
