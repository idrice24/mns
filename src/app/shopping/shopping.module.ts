import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoopingListComponent } from './components/shooping-list/shooping-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './components/shopping-list-item/shopping-list-item.component';


const routes: Routes =
  [
    { path: 'shoppings', component: ShoopingListComponent }
  ];
@NgModule({
  declarations: [ShoopingListComponent, ShoppingListComponent, ShoppingListItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShoppingModule { }
