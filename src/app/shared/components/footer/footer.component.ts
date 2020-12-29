import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AppLanguage } from '../../models/app-language';
import { AppLanguageService } from '../../services/app-language.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appLanguages$: Observable<AppLanguage[]>; // to store all language models
  selectedAppLanguage: AppLanguage;


  constructor(
    private messageService: MessageService,
    private appLanguageService: AppLanguageService, // to provide all languages for app
    private translateService: TranslateService, // helps to switch language
    private config: PrimeNGConfig // to configure the current language
  ) {

    this.appLanguages$ = this.appLanguageService.getAll();
  }

  ngOnInit(): void {

    const browserLang = this.translateService.getBrowserLang();
    // const test = this.translateService.getLangs();
    this.messageService.add({ severity: 'error', summary: browserLang, detail: 'TODO', life: 2000 });
  }



  /***
   * Handle  when dropdown is closed or  hide
   */
  public onChange() {

    this.translateService.use(this.selectedAppLanguage.code);
    this.translateService.get('primeng').subscribe(res => {
      this.messageService.add({ severity: 'error', summary: this.selectedAppLanguage.localeIdentifier, detail: 'TODO', life: 2000 });

      this.config.setTranslation(res);
    });
  }



}
