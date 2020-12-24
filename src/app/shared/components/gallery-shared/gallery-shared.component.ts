import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-shared',
  templateUrl: './gallery-shared.component.html',
  styleUrls: ['./gallery-shared.component.scss']
})
export class GallerySharedComponent implements OnInit {

  constructor(
  	private titleService: Title // Inject to set document title on  browser
  	) { }

  ngOnInit(): void {
  	this.titleService.setTitle('MNS237 - gallery-shared'); // Adding the title Home to the MNS237  main Title
  }

}
