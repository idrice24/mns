import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchUiComponent } from './components/search-ui/search-ui.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [{ path: 'search', component: SearchResultComponent }];
@NgModule({
  declarations: [
    SearchResultComponent,
    SearchUiComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SearchResultComponent,
    SearchUiComponent,
    RouterModule]
})
export class SearchModule { }
