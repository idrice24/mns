import { TestBed } from '@angular/core/testing';

import { AppLanguageService } from './app-language.service';

describe('AppLanguageService', () => {
  let service: AppLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
