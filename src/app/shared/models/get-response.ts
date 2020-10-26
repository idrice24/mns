import { Blog } from './blog';
import { Product } from './product';

// ref: Udemy --Chapter 58-60
export interface GetResponse {
  _embedded: {
    blogs: Blog[],
    products: Product[]

  };


}
