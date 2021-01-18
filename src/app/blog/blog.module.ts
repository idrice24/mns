import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { TooltipModule } from 'primeng/tooltip';

import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  { path: '', component: PostListComponent, data: { animation: 'BlogPage' } },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MomentModule.forRoot({ relativeTimeThresholdOptions:{ 'm':59 }}), // this makes all the ngx-moment pipes available for use
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    TooltipModule, // Help to use tooltips in HTML files to help users to easy understand the management of a page!!
    ButtonModule,
    FieldsetModule, // For a fieldset toggeable
    ListboxModule,
    ToastModule, //  Help to use toast in HTML file
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [MessageService]
})
export class BlogModule { }
