import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { Blog } from '../models/blog';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private usersUrl = 'api/users';  // URL to web api

  constructor(private userService: UserService) {

  }

  getDummy(): Observable<AppUser[]> {
    return this.userService.getUsers().pipe(map(i => i));
  }


}
