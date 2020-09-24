import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetResponse } from '../models/get-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = '/assets/data/blogs.json';
  constructor(private httpClient: HttpClient) {


  }

  getBlogList() {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(res => res._embedded.blogs));
  }
}
