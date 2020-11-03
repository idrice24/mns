import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog';
import { SelectItem } from 'primeng/api';

// REF: https://stackblitz.com/angular/gxbmvnyvqrg?file=src%2Fapp%2Fhero.service.ts
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];

  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;

  sortField: string;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.listBlogs();
    // TODO@idrcie sort by title
    this.sortOptions = [
      { label: 'Alphabetique', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
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
      console.warn(data);
    });
  }
}
