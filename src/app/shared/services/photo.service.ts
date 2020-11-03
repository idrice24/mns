import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private imageUrl = 'api/photos';
  constructor(private httpClient: HttpClient) { }

  getImages() {
    return this.httpClient.get<Image[]>(this.imageUrl);
  }
}
