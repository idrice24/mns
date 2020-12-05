import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-contact-map',
  templateUrl: './contact-map.component.html',
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements OnInit {
  options: any;
  overlays: any[]; // To display a marker such as circle

  // To Get longitude and latitude google maps of Makepe city
  private latitudeMakepe = 4.079478669976131;
  private logitudeMakepe = 9.721055535221957;


  constructor() { }



  ngOnInit() {
    this.options = {
      center: { lat: this.latitudeMakepe, lng: this.logitudeMakepe },
      zoom: 17
    };

    this.overlays = [
      new google.maps.Marker({ position: { lat: this.latitudeMakepe + 1, lng: this.logitudeMakepe + 1 }, title: 'Konyaalti' }),
      new google.maps.Circle({
        center: { lat: this.latitudeMakepe + 0.0002, lng: this.logitudeMakepe },
        fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500
      }),

    ];

  }
}
