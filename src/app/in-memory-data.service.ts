
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppUser } from './shared/models/app-user';
import { AppVideo } from './shared/models/app-video';

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


    // @Idrice Videos should come from Youtube
    const items2020 = [
      { id: 1, name: 'featuring', publishedDate: '2020/10/13', link: 'S6baf8BqKDI', top: '1', subtitle: 'Lartiste featuring', title: 'Mafiosa' },
      { id: 2, name: 'CR goals', publishedDate: '2020/10/13', link: 'kutk2XHEZNU', top: '2', subtitle: 'Vald', title: 'Désaccordé' },
      { id: 3, name: 'CR goals', publishedDate: '2020/10/13', link: 'iPGgnzc34tY', top: '3', subtitle: 'Aya Nakamura', title: 'Djadja' },
      { id: 4, name: 'CR goals', publishedDate: '2020/10/13', link: 'fC6YV65JJ6g', top: '4', subtitle: 'Maître Gims & Vianney', title: 'La Même' },
      { id: 5, name: 'CR goals', publishedDate: '2020/10/13', link: 'hQU_pgyCL6k', top: '5', subtitle: 'Dadju', title: 'Bob Marley' },
      { id: 6, name: 'CR goals', publishedDate: '2020/10/13', link: 'xpVfcZ0ZcFM', top: '6', subtitle: 'Drake	God\'s', title: 'Plan ' },
      { id: 7, name: 'CR goals', publishedDate: '2020/10/13', link: 'RHb5LKnnxLg', top: '7', subtitle: 'Vegedream', title: 'Ramenez la coupe à la maison' },
      { id: 8, name: 'CR goals', publishedDate: '2020/10/13', link: 'BQ0mxQXmLsk', top: '8', subtitle: 'Camila Cabello featuring', title: 'Havana' },
      { id: 9, name: 'CR goals', publishedDate: '2020/10/13', link: 'DkeiKbqa02g', top: '9', subtitle: 'Calvin Harris & Dua Lipa', title: 'One Kiss' },
      { id: 10, name: 'CR goals', publishedDate: '2020/10/13', link: '_I_D_8Z4sJE', top: '10', subtitle: 'Nicky Jam & J Ba', title: 'X' }
    ];
    const items1999 = [
      { id: 1, name: 'CR goals', publishedDate: '1999/10/13', link: 'S6baf8BqKDI', top: '1', subtitle: 'Lartiste featuring  ', title: 'CR7 First Goal in UV' },
      { id: 2, name: 'CR goals', publishedDate: '1999/10/13', link: 'S6baf8BqKDI', top: '2', subtitle: 'Lartiste featuring  ', title: 'CR7 First Goal in UV' },
      { id: 3, name: 'CR goals', publishedDate: '1999/10/13', link: 'S6baf8BqKDI', top: '4', subtitle: 'Lartiste   Caroliina', title: 'CR7 First Goal in UV' },
      { id: 4, name: 'CR goals', publishedDate: '1999/10/13', link: 'S6baf8BqKDI', top: '3', subtitle: 'Lartiste   Caroliina', title: 'CR7 First Goal in UV' }
    ];
    const videos = [
      {
        id: 1,
        year: 2020,
        items: items2020
      },
      {
        id: 2,
        year: 1999,
        items: items1999
      }];


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
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the',
            rating: 3
          }, {
            content: 'hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... ..hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...hi... this is the second blog...',
            createdDate: '2013-03-02T16:41:45Z',
            id: 3,
            imageUrl: 'assets/img/aboutus.jpg',
            publishedDate: '2020-03-02T16:41:00Z',
            title: 'third topic',
            updatedDate: '2020-03-02T16:41:45Z',
            summary: 'this is the second blog...hi... this is the second blog.is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the first blog.hi this is the',
            rating: 1
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
    return { users, blog, videos };
  }


}
