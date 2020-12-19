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

import { MatTooltipModule } from '@angular/material/tooltip'; // import the tooltipModule 


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
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    MatTooltipModule, // for tooltip
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
