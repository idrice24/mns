import { Injectable } from '@angular/core';
import { AppUser } from '../models/app-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap, catchError, map } from 'rxjs/operators';
import { AvatarService } from './avatar.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userUrl = 'localhost:8080/'
  private usersUrl: string ; // URL to web api
  private userUrl: string;
  private userRegisterUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private avatarService: AvatarService) { 
    this.usersUrl = 'https://mns237-server.herokuapp.com/api';
    this.userRegisterUrl = 'https://mns237-server.herokuapp.com/api/register';
    this.userUrl = 'https://mns237-server.herokuapp.com/api/users';
  }

  /** GET User by id. Will 404 if id not found */
  getUser(id: number): Observable<AppUser> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient.get<AppUser>(url).pipe(
      tap((_: any) => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<AppUser>(`getUser id=${id}`))
    );
  }

  /** GET Users from the server */
  getUsers(): Observable<AppUser[]> {
    return this.httpClient.get<AppUser[]>(this.userUrl).pipe(
      tap((userList: AppUser[]) => this.addAvatar(userList)),
      catchError(this.handleError<AppUser[]>('getUsers', []))
    );
  }

  /** POST: add a new User to the server */
  addUser(appUser: AppUser): Observable<AppUser> {
    return this.httpClient.post<AppUser>(this.userRegisterUrl, appUser, this.httpOptions).pipe(
      tap((newUser: AppUser) => this.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError<AppUser>('addUser'))
    );
  }

  /** DELETE: delete the User from the server */
  deleteUser(user: AppUser | number): Observable<AppUser> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.userUrl}/${id}`;

    return this.httpClient.delete<AppUser>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<AppUser>('deleteUser'))
    );
  }

  /** FIND: Find user by given username and password @Idrice this should be removed. backend should check it */
  findUser(username: string, password: string): Observable<AppUser> {
    return this.getUsers().pipe(
      map((myArray: any[]) => myArray.find(i => i.username === username && i.password === password)));
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

  // Set Avatar for Fun
  private addAvatar(userList: AppUser[]) {

    if (userList === null) {
      return;
    }
    userList.forEach(user => {
      if (user.avatar === undefined) {
        user.avatar = this.avatarService.generateAvatar(user.fName as string, user.lName as string);
      }

    });
  }
}
