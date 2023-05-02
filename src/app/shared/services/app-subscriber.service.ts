
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { LogService } from './log.service';
import { AppSubscriber } from '../models/app-subscriber';


@Injectable({
  providedIn: 'root'
})
export class AppSubscriberService {

  private appSubscribersUrl: string ;  // URL to web api, subscribers= Same name in InMemoryDataService class
  private addNewLetters: string;
  private deleteNewLetters: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private logService: LogService) {
  this.appSubscribersUrl = 'http://localhost:8080/api/list/abonnement';
  this.addNewLetters = 'http://localhost:8080/api/newsletter';
  this.deleteNewLetters = 'http://localhost:8080/api/abonnement/delete';  }

  /** GET Subscribers from the server */
  getAppSubscriber(): Observable<AppSubscriber[]> {
    return this.httpClient.get<AppSubscriber[]>(this.appSubscribersUrl).pipe(
      tap((userList: AppSubscriber[]) => this.logService.log(userList)),
      catchError(this.handleError<AppSubscriber[]>('getAppSubscriber', []))
    );
  }


  addAppSubscriber(appSubscriber: AppSubscriber): Observable<AppSubscriber> {
    return this.httpClient.post<AppSubscriber>(this.addNewLetters, appSubscriber, this.httpOptions).pipe(
      tap((newUser: AppSubscriber) => this.logService.log(`added Subscriber w/ id=${newUser.id}`)),
      catchError(this.handleError<AppSubscriber>('addUser'))
    );
  }

  /** DELETE: REMOVE  subscriber from DB */
  deleteAppSubscriber(appSubscriber: AppSubscriber | number): Observable<AppSubscriber> {
    const id = typeof appSubscriber === 'number' ? appSubscriber : appSubscriber.id;
    const url = `${this.deleteNewLetters}/${id}`;

    return this.httpClient.delete<AppSubscriber>(url, this.httpOptions).pipe(

      catchError(this.handleError<AppSubscriber>('deleteUser'))
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
      this.logService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
