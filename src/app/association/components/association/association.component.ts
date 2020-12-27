import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  constructor(
    private titleService: Title // Inject to set document title on  browser
   ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Association'); // Adding the title Home to the MNS237  main Title
  }

}
