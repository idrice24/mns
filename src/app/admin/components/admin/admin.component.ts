import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


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
  items: any;


  constructor(private router: Router, private route: ActivatedRoute,
              private titleService: Title // Inject to set document title on  browser
    ) {  }


  ngOnInit() {
    const manageItems = [
      {
        routerLink: 'dashboard',
        label: 'Dashboard',
        icon: 'pi pi-list',

      },
      {
        routerLink: 'abonnement',
        label: 'Abonnements',
        icon: 'pi pi-fw  pi-comments',
        badge: '10',
        title: 'mns237-admin'

      },
      {
        routerLink: 'blog',
        label: 'Blog',
        icon: 'pi pi-fw pi-share-alt',

      },

      {
        routerLink: 'gallery',
        label: 'Gallery',
        icon: 'pi pi-fw pi-bell',

      },
      {
        routerLink: 'products',
        label: 'Product',
        icon: 'pi pi-fw pi-folder',

      },
      {
        routerLink: 'video',
        label: 'Videos',
        icon: 'pi pi-fw pi-video',

      },
      {
        routerLink: 'users',
        label: 'Users',
        icon: 'pi pi-fw pi-user'
      }
    ];
    this.items = [
      {
        label: 'Manage',
        items: manageItems
      },
      {
        label: 'Setting',
        items: [
          { label: 'Admin', icon: 'pi pi-fw pi-filter' },
          {
            label: 'Log out', routerLink: '/login',
            icon: 'pi pi-fw pi-sign-out'
          }
        ]
      }];
    this.titleService.setTitle('MNS237 - Media'); // Adding the title Home to the MNS237  main Title
  }

}
