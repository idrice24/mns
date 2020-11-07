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
  selectedTopics;
  appBlogDetailsDialog: boolean;
  submitted: boolean;

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

    }

    deleteSelectedTopics() {

    }

    saveTopic() {
      // REF: https://www.primefaces.org/primeng/showcase/#/table/crud

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

  }
}
