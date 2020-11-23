import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppSubscriberService } from './app-subscriber.service';

describe('AppSubscriberService', () => {
  let service: AppSubscriberService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(AppSubscriberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
