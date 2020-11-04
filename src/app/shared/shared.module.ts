import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ForbittenEmailValidatorDirective } from './directives/forbitten-email-validator.directive';
import { ForbittenFnameValidatorDirective } from './directives/forbitten-fName-validator.directive';
import { ForbittenPasswordValidatorDirective } from './directives/forbitten-password-validator.directive';
import { SafePipe } from './pipes/safe.pipe';
import { MenubarModule } from 'primeng/menubar';
import { GallerySharedComponent } from './components/gallery-shared/gallery-shared.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ForbittenEmailValidatorDirective,
    ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective,
    SafePipe,
    GallerySharedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GallerySharedComponent, // allows home to use it
    SafePipe,
    ForbittenEmailValidatorDirective,
    ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective],
  providers: []
})
export class SharedModule { }
