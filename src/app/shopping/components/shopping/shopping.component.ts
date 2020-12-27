import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private titleService: Title // Inject to set document title on  browser
   ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Shopping'); // Adding the title Home to the MNS237  main Title
  }

}
