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
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
    ButtonModule,
    ToastModule //  allows usage of toast in html file
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GallerySharedComponent, // allows home to use it
    SafePipe,
    ToastModule, //  allow others module to use toast i.e. app.Module
    ForbittenEmailValidatorDirective,
    ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective],
  providers: [
    MessageService // to provide all toast msg for all app module
  ]
})
export class SharedModule { }
