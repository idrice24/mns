import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig,
    private titleService: Title // Inject to set document title on  browser
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.titleService.setTitle('MNS237 - Home'); // Adding the title Home to the MNS237  main Title
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
