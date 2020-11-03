import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogs: Topic[];
  recentPosts: Topic[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;

  sortField: string;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.listBlogs();
    this.loadRecentPosts();
    // TODO@idrcie sort by title
    this.sortOptions = [
      { label: 'Produits', value: '!price' },
      { label: 'Blogs', value: 'price' }
    ];
    this.sortKey = this.sortOptions[0];
  }
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

      this.recentPosts = data.slice(0, 3);

    });

  }
}

