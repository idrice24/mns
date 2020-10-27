import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products';

  // private productUrl = 'api/product';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>(this.productUrl).pipe(map(res => res));
  }


}
