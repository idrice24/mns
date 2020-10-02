import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog';
import { UserService } from 'src/app/shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';

// REF: https://stackblitz.com/angular/gxbmvnyvqrg?file=src%2Fapp%2Fhero.service.ts
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.listBlogs();

  }


  listBlogs() {
    this.blogService.getBlogList().subscribe(data => {
      this.blogs = data;
      console.warn(data);
    });
  }
}
