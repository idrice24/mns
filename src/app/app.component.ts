import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mns237';


  constructor(private router: Router) {
    console.log('##########> configured routes: ', this.router.config);
  }
}
