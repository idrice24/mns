import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/services/log.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  numberOfAppUsers: number;
  items;
  constructor(private logService: LogService, private userService: UserService,
    private titleService: Title // Inject to set document title on  browser
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Admin-dashboard'); // Adding the title Home to the MNS237  main Title
    this.userService.getUsers().subscribe(appUsers => this.numberOfAppUsers = appUsers.length);
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

}
