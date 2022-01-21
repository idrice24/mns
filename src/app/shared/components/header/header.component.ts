import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarService } from '../../services/avatar.service';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // To store list of menu items
  menuItems!: MenuItem[];
  subscription: any; // To act subscription
  subcriptionShoppingCart: any;
  loggingAvatar!: string;

  numberOfShoppinItems: number; //  To store Items inside Cart
  constructor(
    private avatarService: AvatarService, // To Create  Avatar
    private missionService: MissionService // Provider Info from loggIn
  ) {
    this.numberOfShoppinItems = 0;
  }

  ngOnInit(): void {
    this.loadMenuItems();

    this.subscription = this.missionService.missionConfirmed$.subscribe(el => {

      this.loggingAvatar = this.avatarService.generateAvatar(el, 'zaba');

    });

    // subcriptionShoppingCart
    this.subcriptionShoppingCart = this.missionService.missionToCart$.subscribe(value => {


      if (value) {
        console.log('SERVICELLLLLLLOWRKS ' + this.numberOfShoppinItems);
        this.numberOfShoppinItems = this.numberOfShoppinItems + 1;
      }
      else {
        this.numberOfShoppinItems = this.numberOfShoppinItems--;
      }


    });
  }

  private loadMenuItems() {
    this.menuItems = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
    this.subcriptionShoppingCart.unsubscribe();
  }
}


