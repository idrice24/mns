import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ForbittenEmailValidatorDirective } from './directives/forbitten-email-validator.directive';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ForbittenEmailValidatorDirective,
    SafePipe],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SafePipe,

    ForbittenEmailValidatorDirective],
  providers: []
})
export class SharedModule { }
