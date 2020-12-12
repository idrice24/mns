import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';
import { SharedModule } from 'primeng/api';


const routes: Routes =
  [
    { path: 'shoppings', component: ShoppingListComponent }
  ];
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule, // To use common functions accross the app
    RouterModule.forChild(routes)
  ]
})
export class ShoppingModule { }
