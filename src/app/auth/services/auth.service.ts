import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private userService: UserService, private httpClient: HttpClient) {

  }

  checkLogin(username, password): Observable<boolean | void> {
    // logic to check password

    return this.userService.findUser(username, password).pipe(
      map(userFromBackend => {
        if (userFromBackend && userFromBackend.token) {

          // Get user data from Browser!!
          localStorage.setItem('currentUserKey', JSON.stringify(userFromBackend.token));

          console.log('User Found !!--- ');

          return true;
        }
        return true; // after change back to false

      }),
      delay(500)); // Delay just for fun !!!
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUserKey'));
    return currentUser.token;
  }
  // Provide information if Login is corect or Not.!
  isLoggedIn() {
    if (localStorage.getItem('currentUserKey')) {
      console.log(' isLoggedIn() ----> TRUE');
      return true;
    }
    console.log(' isLoggedIn() ----> FALSE');
    return true;// change after to false
  }


  logout() {
    localStorage.removeItem('currentUserKey');
  }

  // Todo@Idrice for later DO NOT REMOVE
  login2(username, password) {
    return this.httpClient.post<any>(`apiServer/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUserKey', JSON.stringify(user));
        return user;
      }));
  }
}
