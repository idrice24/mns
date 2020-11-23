import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogs: Topic[];
  blog: Topic;
  recentPosts: Topic[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;
  showMenu = '';
  showSubMenu = '';
  display: boolean;

  sortField: string;


  message: string;
    like = 0; unlike = 0;


  constructor(
    private blogService: BlogService, private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.listBlogs();
    this.loadRecentPosts();

    this.sortOptions = [
      { label: 'Produits', value: '!price' },

      { label: 'Blogs', value: 'price' }
];
    this.sortKey = this.sortOptions[0]; }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  private listBlogs() {
    this.blogService.getTopicList().subscribe(data => {

      this.recentPosts = data.slice(0, 3);
      this.blogs = data;
    });
  }

  private loadRecentPosts() {
    this.blogService.getTopicList().subscribe(data => {

      this.recentPosts = data.slice(0, 4);

    });

  }
  changeBlogComment(){ }
changeBlogLike(){
this.like += 1;
}

  changeBlogUnlike(){
this.unlike += 1;
  }
shareBlog(){}

isPositiveChange(): boolean { return this.like >= this.unlike;
}
}
