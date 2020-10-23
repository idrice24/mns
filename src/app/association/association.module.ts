import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationComponent } from './components/association/association.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AssociationComponent
  }];

@NgModule({
  declarations: [AssociationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AssociationModule { }
