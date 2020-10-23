import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    FieldsetModule,
    ListboxModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogModule { }
