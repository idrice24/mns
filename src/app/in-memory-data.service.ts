
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppUser } from './shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, fName: 'Ghis', lName: 'Dr Nice', email: 'Ghis@yahoo.com', password: 'password1', isAdmin: true },
      { id: 12, fName: 'Bombasto', lName: 'Dr Nice', email: 'Bombasto@yahoo.com', password: 'password1', isAdmin: false },
      { id: 13, fName: 'Zoe', lName: 'Dr Nice', email: 'Zoe@yahoo.com', password: 'password1', isAdmin: false },

    ];
    
    const blog = [
      {
        _embedded: {
          blogs: [{
            content: 'hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 2,
            imageUrl: 'assets/img/aboutus.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          }, {
            content: 'hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/aboutus.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          },
          {
            content: 'hi... this is the third blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/CMR5.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          },
          {
            content: 'hi... this is the fouth blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/CMR7.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the'
          }]
        }
      }
    ];

    // Important!! Name of array is the name of in api url --> api/users
    return { users, blog };
  }


}
