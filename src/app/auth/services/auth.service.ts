import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private httpClient: HttpClient) {

  }

  login(username, password): Observable<boolean | void> {
    // logic to check password
    const isOkay = username === 'admin' && password === 'admin';
    const userAdmin = {
      username: 'admin',
      password: 'admin'
    };
    const token = localStorage.getItem('currentUser');

    return of(isOkay && !token).pipe(map(fakeOkay => {
      if (fakeOkay) {
        localStorage.setItem('currentUser', JSON.stringify(userAdmin));
      }
    }),
      delay(500),
      tap(val => this.isLoggedIn = isOkay)
    );
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }

  // Todo@Idrice for later DO NOT REMOVE
  login2(username, password) {
    return this.httpClient.post<any>(`apiServer/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }
}
