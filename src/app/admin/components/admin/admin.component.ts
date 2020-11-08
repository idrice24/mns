import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  sidebarnavItems;
  display: boolean;


  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.sidebarnavItems = this.getRoutes();

  }

  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }


  getRoutes() {
    const theR = [
      {
        path: 'dashboard',
        title: 'Dashboard',
        icon: 'icon-list',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'abonnement',
        title: 'Manage Abonnements',
        icon: 'icon-envelope',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'blog',
        title: 'Manage Blog',
        icon: 'icon-event',
        class: '',
        extralink: false,
        submenu: []
      },

      {
        path: 'gallery',
        title: 'Manage Gallery',
        icon: 'icon-bulb',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'products',
        title: 'Manage Product',
        icon: 'icon-belt',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'video',
        title: 'Manage Videos',
        icon: 'icon-bell',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: 'users',
        title: ' User-List',
        icon: 'icon-people',
        class: '',
        extralink: false,
        submenu: []
      }
      , {
        path: '',
        title: 'Settings',
        icon: 'icon-settings',
        class: '',
        extralink: false,
        submenu: []
      },

    ];
    return theR;
  }
}
