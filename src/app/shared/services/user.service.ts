import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private usersUrl = 'api/users';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  /** GET Users from the server */
  getUsers(): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>(this.usersUrl).pipe(
      tap(_ => this.log('fetched  Users')),
      catchError(this.handleError<AppUser[]>('getUsers', []))
    );
  }
  /** POST: add a new User to the server */
  addUser(appUser: AppUser): Observable<AppUser> {
    return this.httpClient.post<AppUser>(this.usersUrl, appUser, this.httpOptions).pipe(
      tap((newUser: AppUser) => this.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<AppUser>('addUser'))
    );
  }
  /** DELETE: delete the User from the server */
  deleteUser(user: AppUser | number): Observable<AppUser> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.httpClient.delete<AppUser>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<AppUser>('deleteUser'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO@Idrice: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO@Idrice: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`UserService: ${message}`);
    console.warn(`UserService: ${message}`);
  }
}
