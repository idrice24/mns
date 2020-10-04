import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems;
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  // End open close
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
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'icon-list',
        class: 'nav-item',
        extralink: false,
        submenu: []
      },
      {
        path: 'blog',
        title: 'Manage Blog',
        icon: 'icon-event',
        class: 'nav-item',
        extralink: false,
        submenu: []
      },

      {
        path: 'gallery',
        title: 'Manage Gallery',
        icon: 'icon-bulb',
        class: 'nav-item',
        extralink: false,
        submenu: []
      },
      {
        path: '',
        title: 'Manage Videos',
        icon: 'icon-bell',
        class: 'nav-item',
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
        class: 'nav-item',
        extralink: false,
        submenu: []
      },

    ];
    return theR;
  }
}
