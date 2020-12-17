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
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MissionService } from './services/mission.service';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
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
    DataViewModule,
    TooltipModule, // Tooltip directive provides advisory information for a component
    CardModule,
    RippleModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule, // To use p-button in html file
    FieldsetModule,
    ListboxModule,
    ButtonModule,
    RadioButtonModule, // to use p-ratiobutton
    CarouselModule, // To use p-carousel in html file
    ToastModule //  allows usage of toast in html file
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GallerySharedComponent, // allows home to use it
    SafePipe,
    CarouselModule,
    TooltipModule,
    MenubarModule,
    DataViewModule,
    CardModule,
    PanelModule,
    RippleModule, // use new concept to export extern module
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    RadioButtonModule,
    FieldsetModule,
    ListboxModule,
    ToastModule, //  allow others module to use toast i.e. app.Module
    ButtonModule, // to wrap access to other module .ie. shoppingModule
    ForbittenEmailValidatorDirective,
    ForbittenFnameValidatorDirective,
    ForbittenPasswordValidatorDirective],
  providers: [
    MessageService, // to provide all toast msg for all app module
    MissionService // This alo to use  this service in any module in  app
  ]
})
export class SharedModule { }
