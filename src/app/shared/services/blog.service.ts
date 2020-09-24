import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl = '/assets/data/blogs.json';
  constructor(private httpClient: HttpClient) {


  }
}
