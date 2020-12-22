import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLanguage } from '../../models/app-language';
import { AppLanguageService } from '../../services/app-language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  appLanguages$: Observable<AppLanguage[]>; // to store all language models

  selectedAppLanguage; // to store all language models

  constructor(private appLanguageService: AppLanguageService) {
    this.appLanguages$ = this.appLanguageService.getAll();
  }

  ngOnInit(): void {
    this.appLanguages$.subscribe(lan => this.selectedAppLanguage = lan[0]);
  }

}
