import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mns237';


  constructor(private router: Router) {
    AOS.init();
    console.log('##########> configured routes: ', this.router.config);
  }
}
