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

  getBlogList() {
    // TODO@Idrice find out best way to  call  without [0]
    return this.httpClient.get<GetResponse>(this.blogUrl).pipe(map(res => res[0]._embedded.blogs));
  }

  getTopicList(): Observable<Topic[]> {
    return this.httpClient.get<GetResponse>(this.blogUrl).pipe(map(res => res._embedded.blogs));

  }
  getTopic(id: number | string) {
    return this.getTopicList().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Topic[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
