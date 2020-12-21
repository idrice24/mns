import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title// Inject to set document title on  browser
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Contact');
  }

}
