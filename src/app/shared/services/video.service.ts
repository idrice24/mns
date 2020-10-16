import { Injectable } from '@angular/core';
import { AppVideo } from '../models/app-video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videosUrl = 'api/videos'; // URL to web api
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  /** GET: Videos from server */
  getVideos(): Observable<AppVideo[]>{
    return this.httpClient.get<AppVideo[]>(this.videosUrl).pipe(
    tap(_ => this.log('fetched Videos ')),
    catchError(this.handleError<AppVideo[]>('getVideos', []))
    );
  }

  /** POST: add a new video to the server */

  addVideo(appVideo: AppVideo): Observable<AppVideo> {
    return this.httpClient.post<AppVideo>(this.videosUrl, appVideo, this.httpOptions).pipe(
      tap((newVideo: AppVideo) => this.log(`added Video w/ id=${newVideo.id}`)),
      catchError(this.handleError<AppVideo>('addVideo'))
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
      return of(result as T);
      };
    }

    /** Log a VideoService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`UserService: ${message}`);
    console.warn(`UserService: ${message}`);
  }

}
