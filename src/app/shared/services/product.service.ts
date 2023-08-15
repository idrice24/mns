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
  private productUrl: string; // I decleared the URL string variable
  private addNewProduct: string;
  private editProduct: string;
  private deleteProduct: string;


  product!: Product;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private logService: LogService) {
    /*this.productUrl = 'https://mns237-server.herokuapp.com/api/products'; // here i assigned the API part to the URL
    this.addNewProduct = 'https://mns237-server.herokuapp.com/api/products/add';
    this.editProduct = 'https://mns237-server.herokuapp.com/api/products/update/{id}';
    this.deleteProduct = 'https://mns237-server.herokuapp.com/api/products/delete/{id}';*/

    this.productUrl = 'http://localhost:8888/api/products';
  }

  // get all products.
  getProducts() {
    return this.httpClient.get<Product[]>(this.productUrl).pipe(map(res => res));
  }

  // get product according to rating

  // get product according to category

  // get product list
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productUrl);
  }

  // add a product
  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Topic>(this.addNewProduct, product, this.httpOptions).pipe(
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

  /** DELETE: delete the Product from the server */
  deleteUser(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.deleteProduct}/${id}`;

    return this.httpClient.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>('deleteUser'))
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
    console.warn(`ProductService: ${message}`);
  }

}
