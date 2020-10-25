import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Blog } from 'src/app/shared/models/blog';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogs: Blog[];
  recentPosts: Blog[];
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

  listBlogs() {
    this.blogService.getBlogList().subscribe(data => {
      this.blogs = data;
      this.recentPosts = this.blogs.slice(0, 3);
    });
  }

  private loadRecentPosts() {

  }
}
