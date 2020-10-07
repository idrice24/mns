import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  funny;


  constructor() { }

  ngOnInit(): void {
    this.funny = [0, 1, 2, 4, 5];
  }

}
