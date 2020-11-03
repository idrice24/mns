import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/services/log.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  items;
  constructor(private logService: LogService) { }

  ngOnInit(): void {
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
