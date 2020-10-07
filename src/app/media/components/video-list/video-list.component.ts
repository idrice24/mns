import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  funny;


  constructor() { }

  ngOnInit(): void {
    this.funny = [0, 1, 2, 4, 5];
    for (let i = 0; i < 20; i++) {
      this.funny.push(i);
    }

  }

}
