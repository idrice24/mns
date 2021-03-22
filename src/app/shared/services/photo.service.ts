import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private imageUrl = 'api/photos';
  constructor(private httpClient: HttpClient, private logService: LogService) { }

  getImages() {
    return this.httpClient.get<Image[]>(this.imageUrl);
  }
  getPhotos() {
    return this.httpClient.get<Image[]>(this.imageUrl).pipe(map(res => res));
  }

  addPicture(picture: Image): Observable<Image>{
  	return this.httpClient.post<Image>(this.imageUrl, picture, this.httpOptions).pipe(
      tap((newPicture: Image) => this.logService.log(`added Pictures w/ id=${newPicture.id}`)),
      catchError(this.handleError<Image>('addPicture'))
    );

  }

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
