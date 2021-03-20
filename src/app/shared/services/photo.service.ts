import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private imageUrl = 'api/photos';
  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<Image[]>(this.imageUrl);
  }
  getPhotos() {
    return this.httpClient.get<Image[]>(this.imageUrl).pipe(map(res => res));
  }
}
