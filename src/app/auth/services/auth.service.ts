import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private httpClient: HttpClient) {

  }

  login(username, password): Observable<boolean> {
    // logic to check password
    const isOkay = username === 'admin' && password === 'idrice';
    return of(isOkay).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isOkay)
    );
  }

  logout(): void {
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
