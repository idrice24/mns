import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Topic } from 'src/app/shared/models/topic';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
  blogForm: FormGroup;

  // convenience getter for easy access to form fields
  get code() { return this.blogForm.get('code'); }
  get title() { return this.blogForm.get('title'); }
  get content() { return this.blogForm.get('content'); }
  get category() { return this.blogForm.get('category'); }
  get summary() { return this.blogForm.get('summary'); }
  get imageUrl() { return this.blogForm.get('imageUrl'); }

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private blogService: BlogService,
    private titleService: Title // Inject to set document title on  browser
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Manage-blog'); // Adding the title Home to the MNS237  main Title
    this.appBlog = { id: 0, summary: 'kok' };
    this.getBlogs();

    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });

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

  saveBlog() {

    // @Idrice why? what error durcing the process
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
      this.appBlogDialog = false; // hide the  html dialog
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

  // @Idrice wrong comment?
  // Save to data base this user information
  doSubscription() {

    // @Idrice is that new one??  can you explain this line
    const currentAppBlog: Topic = {
      title: this.title.value,
      content: this.content.value,
      imageUrl: this.imageUrl.value,
      summary: this.summary.value,
      category: this.category.value,
      verified: false,
      createdDate: `${Date.now()}`, //  Set the createdDate value
    };



    // Send data to server
    this.blogService.addBlog(currentAppBlog).subscribe(_ =>

      // To Clean a formular
      this.blogForm.reset());

  }

}
