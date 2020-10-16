import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-dashboard',
  templateUrl: './media-dashboard.component.html',
  styleUrls: ['./media-dashboard.component.css']
})
export class MediaDashboardComponent implements OnInit {

  items;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        text1: 'Galerie Photos',
        text2: 'Inauguration Du Centre National De Commandement De La Video Surveillance',
        src: '/assets/img/bg1.jpg',
        title: 'Galerie Photos'
      },
      {
        text1: 'oka',
        text2: 'Suivez-nous sur notre chaine Youtube',
        src: '/assets/img/bg4.jpg',
        title: 'Videos'
      }
    ];
  }

}
