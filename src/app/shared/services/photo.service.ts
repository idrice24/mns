import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private imageUrl: string;
  photo: Image;
  constructor(private httpClient: HttpClient, private logService: LogService) { 
    this.imageUrl = 'https://mns237-serverapi.herokuapp.com/admin/photos/';}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getImages() {
    return this.httpClient.get<Image[]>(this.imageUrl);
  }
  getPhotos() {
    return this.httpClient.get<Image[]>(this.imageUrl).pipe(map(res => res));
  }

  // add a photo
  addPhoto(photo: Image): Observable<Image> {
    return this.httpClient.post<Image>(this.imageUrl, photo, this.httpOptions).pipe(
      tap((newPhoto: Image) => this.logService.log(`added Photos w/ id=${newPhoto.id}`)),
      catchError(this.handleError<Image>('addPhoto'))
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
