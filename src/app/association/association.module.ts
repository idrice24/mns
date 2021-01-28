import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationComponent } from './components/association/association.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  { path: 'newsletter', component: NewsletterComponent }];

@NgModule({
  declarations: [
    AssociationComponent,
    AboutComponent,
    NewsletterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, NewsletterComponent, AboutComponent]
})
export class AssociationModule { }
