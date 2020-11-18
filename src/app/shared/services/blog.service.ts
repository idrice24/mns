import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetResponse } from '../models/get-response';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // private baseUrl = '/assets/data/blogs.json';
  private blogUrl = 'api/blog';
    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  // TODO@Idrice find out best way to  call  standard httpClient
  getTopicList(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.blogUrl);

  }

  getTopicById(id: number | string) {
    return this.httpClient.get<Topic[]>(this.blogUrl).pipe(
      // (+) before `id` turns the string into a number
      map((topics: Topic[]) => topics.find(topic => topic.id === +id))

    );
  }

  /** POST: add a new Comment to the server */

  addComment(blog: Topic) {
    return this.httpClient.post(this.blogUrl, blog);
  }

  getComment(id: number){
  return this.httpClient.get<Topic[]>(this.blogUrl);

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

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BlogService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`BlogService: ${message}`);
    console.warn(`BlogService: ${message}`);
  }
}
