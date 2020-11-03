import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  header: any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.header = 'XXXXXXXXXXXXXXXXXXXXXXXXXX';
  }

}
