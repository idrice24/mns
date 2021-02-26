import { Injectable } from '@angular/core';
import { AppVideo, AppVideoItem } from '../models/app-video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { tap, catchError, filter, map } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { LogService } from './log.service';


@Injectable({
  providedIn: 'root'
})
export class VideoService {


  private videosUrl = 'api/videos'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })

  };

  constructor(private httpClient: HttpClient, private logService: LogService) { }

  /** GET: Videos from server */
  getVideos(): Observable<AppVideo[]> {
    return this.httpClient.get<AppVideo[]>(this.videosUrl).pipe(
      tap(_ => this.log('fetched Videos ')),
      catchError(this.handleError<AppVideo[]>('getVideos', []))
    );
  }

  // REF: https://stackblitz.com/angular/kmxkdnbbppn?file=src%2Fapp%2Fheroes%2Fhero.service.ts
  getVideoByYear(selectedYear: number) {
    return this.getVideos().pipe(
      map((vs: AppVideo[]) => vs.find(v => v.year === +selectedYear)));

  }

  /** PUT: update the Video on the server */
  updateVideo(video: AppVideo): Observable<any> {
    return this.httpClient.put(this.videosUrl, video, this.httpOptions).pipe(
      tap(_ => this.log(`updated video id=${video.id}`)),
      catchError(this.handleError<any>('updateVideo'))
    );
  }

  /** Getter: get the comment */
getAppComment(): Observable<AppVideo[]> {
    return this.httpClient.get<AppVideo[]>(this.videosUrl).pipe(
      tap((commentList: AppVideo[]) => this.logService.log(commentList)),
      catchError(this.handleError<AppVideo[]>('getAppComment', []))
    );
  }



  /** CREATE : create the comment */
addAppComment(video: AppVideo): Observable<AppVideo> {
    return this.httpClient.post<AppVideo>(this.videosUrl, video, this.httpOptions).pipe(
      tap((newComment: AppVideo) => this.logService.log(`added Comment`)),
      catchError(this.handleError<AppVideo>('addComment'))
    );
  }

  /** CREATE : create the like */
  addAppLike(like: number): Observable<AppVideo> {
    return this.httpClient.post<AppVideo>(this.videosUrl, like, this.httpOptions).pipe(
      tap((newLike: AppVideo) => this.logService.log(`added Like`)),
      catchError(this.handleError<AppVideo>('addLike'))
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

  /** PUT: update the video on the server */
  updateTopic(video: AppVideoItem): Observable<any> {
    return this.httpClient.put(this.videosUrl, video, this.httpOptions).pipe(
      tap(_ => this.log(`updated video id=${video.id}`)),
      catchError(this.handleError<any>('updateVideo'))
    );
  }
}
