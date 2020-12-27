import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title // Inject to set document title on  browser
   ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - About-Us'); // Adding the title Home to the MNS237  main Title
  }

}
