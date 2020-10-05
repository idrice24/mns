import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
	title = 'mns+237-gmap';

	@ViewChild('mapContainer' , {static: false}) gmap: ElementRef;
  	map: google.maps.Map;

  	lat = 40.730610;
  	lng = -73.935242;

	coordinates = new google.maps.LatLng(this.lat, this.lng);

  	mapOptions: google.maps.MapOptions = {
  		center: this.coordinates,
  	zoom: 8,
  	};

   marker = new google.maps.Marker({
     position: this.coordinates,
     map: this.map,
   	});

	
  
	mapInitialiter(){
   	this.map = new google.maps.Map(this.gmap.nativeElement,
   	this.mapOptions,
   	this.marker.setMap(this.map));
  	}

	ngAfterViewInit(){
  	this.mapInitialiter();
  	}

  constructor() { }
  						

  ngOnInit(): void {
  }

}
