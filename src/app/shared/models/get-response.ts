
import { Product } from './product';
import { Topic } from './topic';

// ref: Udemy --Chapter 58-60
export interface GetResponse {
  _embedded: {
    blogs: Topic[],
    products: Product[]

  };


}
