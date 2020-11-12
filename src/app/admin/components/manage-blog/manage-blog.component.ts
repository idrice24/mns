import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Topic } from 'src/app/shared/models/topic';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageBlogComponent implements OnInit {
  appBlogs: Topic[];
  appBlog: Topic;
  blog: Topic = {};
  selectedTopics;
  appBlogDetailsDialog: boolean;
  submitted: boolean;
  appBlogDialog: boolean;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private blogService: BlogService
    ) { }

  ngOnInit(): void {
    this.appBlog = { id: 0, summary: 'kok' };
    this.getBlogs();
  }
   getBlogs(): void {
      this.blogService.getTopicList()
        .subscribe(blogs => {
          this.appBlogs = blogs;

        });
    }

    openNew() {
      this.appBlog = { id: 0 };
      this.appBlog = {};
      this.submitted = false;
      this.appBlogDialog = true;

    }

    deleteSelectedTopics() {

    }

      // REF: https://www.primefaces.org/primeng/showcase/#/table/crud

  saveBlog() {
    this.submitted = true;

    if (this.blog.title.trim()) {
      if (this.blog.id) {
        this.appBlogs[this.findIndexById(this.blog.id)] = this.blog;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Blog Updated', life: 1000 });
      }
      else {
        this.blog.id = 1;
        this.blog.imageUrl = 'blog-placeholder.svg';
        this.appBlogs.push(this.blog);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Blog Created', life: 1000 });
      }

      this.appBlogs = [...this.appBlogs];
      this.appBlogDialog = false;
      this.blog = {};
    }
  }

  deleteTopic(appBlog) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + appBlog.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.appBlogs = this.appBlogs.filter(val => val.id !== appBlog.id);
        this.appBlog = { id: 0 };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'App Blog Deleted', life: 10000 });
      }
    });

  }


  displayTopic(appBlog): void {

    this.appBlog = { ...appBlog };
    this.appBlogDetailsDialog = true;

  }

  hideDialog() {
    this.appBlogDialog = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.appBlogs.length; i++) {
      if (this.appBlogs[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
