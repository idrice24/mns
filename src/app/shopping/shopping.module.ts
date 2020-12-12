import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';

import { ShoppingComponent } from './components/shopping/shopping.component';
import { SharedModule } from '../shared/shared.module';



const routes: Routes =
  [
    {
      path: '', component: ShoppingComponent,
      children: [
        { path: '', component: ShoppingListComponent, data: { title: 'Shoppings' } },
        { path: ':id', component: ShoppingListItemComponent, data: { title: 'ShoppingListItem' } }
      ]
    }
  ];
@NgModule({
  declarations: [
    ShoppingListComponent, // To manage the list of  carts
    ShoppingListItemComponent, // To display each element of the shopping list ie. name,  items
    ShoppingComponent // Represents the parent Component of this module
  ],
  imports: [
    CommonModule,

    SharedModule, // To access to common functions accross the app i.e. pButton
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingModule { }
