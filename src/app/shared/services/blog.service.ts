import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private comments: Comment[];
  blog: Topic;

  // private baseUrl = '/assets/data/blogs.json';
  private blogUrl: string;
  private blogComment: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private logService: LogService) {
    this.blogUrl = 'https://mns237-serverapi.herokuapp.com/api/blogs';
    this.blogComment = 'https://mns237-serverapi.herokuapp.com/api/comments';
     }


  // TODO@Idrice find out best way to  call  standard httpClient
  getTopicList(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.blogUrl);

  }

  /** PUT: update the topic on the server */
  updateTopic(topic: Topic): Observable<any> {
    return this.httpClient.put(this.blogUrl, topic, this.httpOptions).pipe(
      tap(_ => this.log(`updated topic id=${topic.id}`)),
      catchError(this.handleError<any>('updateTopic'))
    );
  }


  getTopicById(id: number | string) {
    return this.httpClient.get<Topic[]>(this.blogUrl).pipe(
      // (+) before `id` turns the string into a number
      map((topics: Topic[]) => topics.find(topic => topic.id === +id))

    );
  }


  /** POST: add a new Like to the server */
  addLike(blog: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(this.blogUrl, blog, this.httpOptions).pipe(
      tap((newLike: Topic) => this.log(`added`)),
      catchError(this.handleError<Topic>('addLike'))
    );
  }


  /** GET Blogs from the server */
  getBlog(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.blogUrl).pipe(
      tap((blogList: Topic[]) => this.logService.log(blogList)),
      catchError(this.handleError<Topic[]>('getBlog', []))
    );
  }

  addBlog(blog: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(this.blogUrl, blog, this.httpOptions).pipe(
      tap((newBlog: Topic) => this.logService.log(`added Posts w/ id=${newBlog.id}`)),
      catchError(this.handleError<Topic>('addBlog'))
    );
  }

  /** DELETE: REMOVE  blog from DB */
  deleteAppBlog(blog: Topic | number): Observable<Topic> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.blogUrl}/${id}`;

    return this.httpClient.delete<Topic>(url, this.httpOptions).pipe(

      catchError(this.handleError<Topic>('deleteBlog'))
    );
  }

  /** GETTER: get the comment */
  getAppComment(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.blogComment).pipe(
      tap((commentList: Topic[]) => this.logService.log(commentList)),
      catchError(this.handleError<Topic[]>('getAppComment', []))
    );
  }

  /** CREATE: create a comment */
  addAppComment(blog: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(this.blogComment, blog, this.httpOptions).pipe(
      tap((newComment: Topic) => this.logService.log(`added Comment`)),
      catchError(this.handleError<Topic>('addComment'))
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
