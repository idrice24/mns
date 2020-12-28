import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppLanguage } from '../models/app-language';

const APPLANGUAGES: AppLanguage[] = [
  { localeIdentifier: 'en-US', name: 'English', code: 'en' },
  { localeIdentifier: 'fr-FR', name: 'French', code: 'fr' },
  { localeIdentifier: 'de-DE', name: 'Deutsch', code: 'de' },
];

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {

  constructor() { }

  /**
   * Return an array observable of language
   */
  getAll(): Observable<AppLanguage[]> {
    return of(APPLANGUAGES);
  }
}
