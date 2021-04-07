import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/services/log.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Title } from '@angular/platform-browser';

import { AvatarService } from 'src/app/shared/services/avatar.service';
import { MissionService } from 'src/app/shared/services/mission.service';

import { ProductService } from 'src/app/shared/services/product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { AppUser } from 'src/app/shared/models/app-user';
import { SelectItem } from 'primeng/api';

import { PhotoService } from 'src/app/shared/services/photo.service';
import { BlogService } from 'src/app/shared/services/blog.service';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  numberOfAppUsers: number;
  numberOfProducts: number;
  numberOfPhotos: number;
  numberOfVideos: number;
  numberOfPosts: number;
  items;
  subscription; // To act subscription
  loggingAvatar: string;
  logginUserId: Observable<AppUser[]>;
  products$: Observable<Product[]>; // Get or set list of topic coming from server

  product: Product; // here we create an object of Topic
  recentProducts: Product[]; // here we create an arraz of Topic
  sortOptions: SelectItem[]; // same here as above
  sortKey: SelectItem; // we create an object to select items in the data base
  sortOrder: number;
  showMenu = '';
  showSubMenu = '';
  display: boolean;

  sortField: string;

  message: string;
  public now: Date = new Date();


  constructor(
    private logService: LogService,
    private userService: UserService,
    private titleService: Title, // Inject to set document title on  browser
    private avatarService: AvatarService, // To Create  Avatar
    private missionService: MissionService, // Provider Info from loggIn
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private photoService: PhotoService,
    private blogService: BlogService,
    private videoService: VideoService
    ) { }

  ngOnInit(): void {

      this.loadRecentProducts();

      this.subscription = this.missionService.missionConfirmed$.subscribe(el => {

      this.loggingAvatar = this.avatarService.generateAvatar(el, 'zaba');
      this.logginUserId = this.userService.getUsers();

    });

      this.titleService.setTitle('MNS237 - Admin-dashboard'); // Adding the title Home to the MNS237  main Title
      this.userService.getUsers().subscribe(appUsers => this.numberOfAppUsers = appUsers.length);
      this.productService.getProducts().subscribe(appProducts => this.numberOfProducts = appProducts.length);
      this.videoService.getVideos().subscribe(appVideos => this.numberOfVideos = appVideos.length);
      this.blogService.getTopicList().subscribe(appPosts => this.numberOfPosts = appPosts.length);
      this.photoService.getPhotos().subscribe(appPhotos => this.numberOfPhotos = appPhotos.length);
      this.items = [
      {
        text1: 'oka',
        text2: 'oka',
        src: '/assets/img/bg1.jpg',
        title: 'Admin Action 1'
      },
      {
        text1: 'oka',
        text2: 'oka',
        src: '/assets/img/bg4.jpg',
        title: 'Admin Action 1'
      },
      {
        text1: 'Un ext por explique ce que admin dot faire',
        text2: 'Last updated 3 mins ago',
        src: 'assets/img/aboutus.jpg',
        title: 'Admin Action 1'
      }
    ];
      this.logService.log(this.items);
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  openRecentProduct(recentP) {
    const productId = recentP.id;
    const urlProduct = 'products/' + productId;
    console.log(urlProduct);
    this.router.navigate([urlProduct]);
  }

  // Take 4 topics as recent posts
  private loadRecentProducts() {
    this.productService.getProductList().subscribe(data => {
      this.recentProducts = data.slice(0, 4);
    });

  }
  openuserDetails(){
    const userId = this.logginUserId;
    const urluser = '/dmin/users/' + userId;
    console.log(urluser);
    this.router.navigate([urluser]);
  }

}
