import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchUiComponent } from './components/search-ui/search-ui.component';



@NgModule({
  declarations: [
    SearchResultComponent,
    SearchUiComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchResultComponent, SearchUiComponent]
})
export class SearchModule { }
