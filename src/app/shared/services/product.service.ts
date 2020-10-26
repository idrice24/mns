import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetResponse } from '../models/get-response';
import { map } from 'rxjs/operators';
import { Topic } from '../models/topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productUrl = '/assets/data/blogs.json';
// private productUrl = 'api/product';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
constructor( private httpClient: HttpClient ) { }

  getProductList() {
    return this.httpClient.get<GetResponse>(this.productUrl).pipe(map(res => res[0]._embedded.products));
  }

  getTopicList(): Observable<Topic[]> {
    return this.httpClient.get<GetResponse>(this.productUrl).pipe(map(res => res._embedded.products));

  }
  getTopic(id: number | string) {
    return this.getTopicList().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Topic[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
