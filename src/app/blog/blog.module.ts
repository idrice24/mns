import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';

import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: BlogListComponent
  }];

@NgModule({
  declarations: [
    BlogListComponent,
    TopicDetailComponent],
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
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class BlogModule { }
