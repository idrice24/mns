import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
  	private titleService: Title// Inject to set document title on  browser
  	) { }

  ngOnInit(): void {
  	this.titleService.setTitle('MNS237 - Page-not-found'); // Adding the title Home to the MNS237  main Title
  }

}
