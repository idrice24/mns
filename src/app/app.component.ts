import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mns237';
  location: Location;
  loading: boolean;

  constructor(private router: Router) {
    // window.location.href.replace('http', 'https');
    this.loading = true;
    AOS.init();
    console.log('##########> configured routes: ', this.router.config);



  }

  ngOnInit() {
    timer(2000).subscribe(x => this.loading = false);

  }
}
