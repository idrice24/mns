import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {
  options: any;
  overlays: any[]; // To display a marker such as circle

  // To Get longitude and latitude google maps of Makepe city
  private latitudeMakepe = 4.06064592274785;
  private logitudeMakepe = 9.738229178780978;


  constructor() { }



  ngOnInit() {
    this.options = {
      center: { lat: this.latitudeMakepe, lng: this.logitudeMakepe },
      zoom: 15
    };

    this.overlays = [
      new google.maps.Marker({ position: { lat: this.latitudeMakepe + 1, lng: this.logitudeMakepe + 1 }, title: 'Konyaalti' }),
      new google.maps.Circle({
        center: { lat: this.latitudeMakepe + 0.00002, lng: this.logitudeMakepe },
        fillColor: 'blue', fillOpacity: 0.15, strokeWeight: 1, radius: 1000
      }),

    ];

  }
}
