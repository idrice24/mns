
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AvatarService } from './avatar.service';

describe('UserService', () => {
  let service: UserService;
  let avatarService: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule]
    });
    service = TestBed.inject(UserService);
    avatarService = TestBed.inject(AvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
