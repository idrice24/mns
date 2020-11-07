import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetResponse } from '../models/get-response';
import { map } from 'rxjs/operators';
import { Topic } from '../models/topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // private baseUrl = '/assets/data/blogs.json';
  private blogUrl = 'api/blog';

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
}
