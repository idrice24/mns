import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
