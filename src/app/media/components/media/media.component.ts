import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(
  	private titleService: Title // Inject to set document title on  browser
  	) { }

  ngOnInit(): void {
  	this.titleService.setTitle('MNS237 - Media'); // Adding the title Home to the MNS237  main Title

  }

}
