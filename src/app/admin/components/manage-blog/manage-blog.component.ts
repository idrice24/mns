import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Topic } from 'src/app/shared/models/topic';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ManageBlogComponent implements OnInit {
  display = false;
  appBlogs: Topic[];
  appBlog: Topic;
  selectedTopics;
  appBlogDetailsDialog: boolean;
  appBlogAddDialog: boolean;
  submitted: boolean;
  addBlogForm: FormGroup;
  message: string;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private blogService: BlogService
    ) { }

  ngOnInit(): void {
    this.appBlog = { id: 0, summary: 'kok' };
    this.getBlogs();
  }

  // get blogs
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
  addTopic(appBlog): void {
    // this.appBlog = { ...appBlog };
    this.appBlogAddDialog = true;
  }

  hideDialog() {

  }

  onSubmit(blogAppData) {
    if (!blogAppData) {
      return;
    }

    this.blogService.addBlog(blogAppData).subscribe();
    // Ref: https://angular.io/start/start-forms
    this.addBlogForm.reset();

    this.message = 'Votre blog a ete soumis';

    console.warn(this.message, blogAppData);
    // Just wait 2 s
    // this.delay(2000);

  }


  // convenience getter for easy access to form fields
  get title() { return this.addBlogForm.get('title'); }
  get content() { return this.addBlogForm.get('content'); }
  get category() { return this.addBlogForm.get('category'); }
  get imageUrl() { return this.addBlogForm.get('imageUrl'); }
  get summary() { return this.addBlogForm.get('summary'); }
}
