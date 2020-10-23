import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationComponent } from './components/association/association.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '', component: AssociationComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  { path: 'newsletter', component: NewsletterComponent }];

@NgModule({
  declarations: [AssociationComponent, AboutComponent, NewsletterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, NewsletterComponent]
})
export class AssociationModule { }
