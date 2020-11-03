import { Blog } from './blog';

// ref: Udemy --Chapter 58-60
export interface GetResponse {
  _embedded: {
    blogs: Blog[]

  };


}
