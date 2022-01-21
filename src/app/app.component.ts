import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { PrimeNGConfig } from 'primeng/api';
import { timer } from 'rxjs';
import { slideInAnimation } from './shared/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'mns237';
  location!: Location;
  loading: boolean;

  constructor(
    private router: Router,
    private config: PrimeNGConfig
  ) {
    // window.location.href.replace('http', 'https');
    this.loading = true;
    AOS.init();
    console.log('##########> configured routes: ', this.router.config);



  }

  ngOnInit() {
    timer(2000).subscribe(x => this.loading = false);

  }

  // Detect when a view changes
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
