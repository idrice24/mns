import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  funs;
  constructor() { }

  ngOnInit(): void {
    this.funs = [1, 3, 4, 5, 6, 7, 8, 9, 0];
  }

}
