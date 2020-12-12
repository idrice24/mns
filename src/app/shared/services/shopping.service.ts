import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ShoppingItem } from '../models/shopping-item';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppinUrl = 'api/shoppings'; // url for calling the server to get shoppings

  // To confiure heade during http request.
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private httpClient: HttpClient, // To interack with HTTP-protocol
    private logService: LogService // To log info. here
  ) {

  }

  /**
   *
   */
  getAll(): Observable<ShoppingItem[]> {
    return this.httpClient.get<ShoppingItem[]>(this.shoppinUrl);

  }

  /**
   * @Idrice: TODO
   */
  update(shoppingItem: ShoppingItem): Observable<any> {
    return this.httpClient.put(this.shoppinUrl, shoppingItem, this.httpOptions).pipe(
      tap(_ => this.logService.log(`updated topic id=${shoppingItem.id}`)),
      catchError(this.handleError<any>('updateTopic'))
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

      console.error(error); // log to console instead

      this.logService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




  // Provides a shopping item information
  get(id: number | string) {
    return this.httpClient.get<ShoppingItem[]>(this.shoppinUrl).pipe(
      // (+) before `id` turns the string into a number
      map((topics: ShoppingItem[]) => topics.find(topic => topic.id === +id))

    );
  }

}
