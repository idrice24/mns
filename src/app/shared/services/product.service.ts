import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './log.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productUrl = 'api/product';
  private productUrl: string ; // I decleared the URL string variable 
  product: Product;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpClient: HttpClient, private logService: LogService) { 
     this.productUrl = 'http://mns237--serverapi.herokuapp.com/admin/products'; // here i assigned the API part to the URL }

  getProducts() {
    return this.httpClient.get<Product[]>(this.productUrl).pipe(map(res => res));
  }
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }
  // add a product
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Topic>(this.productUrl, product, this.httpOptions).pipe(
      tap((newProduct: Product) => this.logService.log(`added Products w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  /** GET: product by Id */
  getProductById(id: number | string) {
    return this.httpClient.get<Product[]>(this.productUrl).pipe(
      // (+) before `id` turns the string into a number
      map((products: Product[]) => products.find(product => product.id === +id))

    );
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(this.productUrl, product, this.httpOptions).pipe(
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
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
