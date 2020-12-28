import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AppLanguage } from '../../models/app-language';
import { AppLanguageService } from '../../services/app-language.service';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appLanguages$: Observable<AppLanguage[]>; // to store all language models
  selectedAppLanguage: AppLanguage;
  private language: AppLanguage; // to store all language models

  constructor(
    private appLanguageService: AppLanguageService,
    private translateService: TranslateService,
    private config: PrimeNGConfig,
    private location: Location // Use to interact with a browser's URL.
  ) {

    this.appLanguages$ = this.appLanguageService.getAll();
  }

  ngOnInit(): void {
    const browserLang = this.translateService.getBrowserLang();
    alert(browserLang);
    this.appLanguages$.subscribe(lan => this.language = lan[0]);
  }



  /***
   * Handle  when dropdown is closedor  hide
   */
  public onHide() {
    if (this.selectedAppLanguage === this.language) {
      return; // Do nothing if same language selected
    }
    this.translateService.use(this.selectedAppLanguage.code);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
    this.language = this.selectedAppLanguage;
    window.location.href = this.location.path() + '/' + this.selectedAppLanguage.code;

    // TODO: @Idrice How to set language @MeNo idea
    // Even me no idea!!
    // this.location. = 'home/fr/';

  }



}
