import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
