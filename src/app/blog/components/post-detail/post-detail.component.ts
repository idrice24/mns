import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AppComment } from 'src/app/shared/models/app-comment';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
  public now: Date = new Date(); // declearing the constan now to set the time

  public header: any; // @Idrice to do what?? // You can use topic object directly

  public commentForm: FormGroup; // this component uses this variable to get information from HTML form
  public selectedTopic: Topic; // To store or get the selected topic
  public blogs: Topic[]; // @Ghislain: to List a topics
  public blog: Topic;

  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private messageService: MessageService, // Fun to use TOAST for  i.e. Comment
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {
    // this is a method in the constructor to set the time at which a comment has being posted from the computer time/browser-->
    setInterval(() => {
          this.now = new Date();
        }, 1);
    }


  // convenience getter for easy access to form fields
  get author() { return this.commentForm.get('author'); }
  get msg() { return this.commentForm.get('msg'); }
  get email() { return this.commentForm.get('email'); }


  // convenience getter for easy access to form fields
  get author() { return this.commentForm.get('author'); }
  get msg() { return this.commentForm.get('msg'); }
  get email() { return this.commentForm.get('email'); }


  ngOnInit(): void {

    this.getCurrentTopic();

    this.commentForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      msg: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    }
    );
  }


  // handle when user click on  Button
  // the theDta is getting the commentForm values
  postYourComment(theData) {
    const message = theData.msg;
    const author = theData.name;

    const createdDate = this.now; // here i am assigning the values of the new Date to createdDate -->

    // @Idrice: this is how to create a object of type Comment
    const commentObject: AppComment = {
      author: theData.name,
      createdDate: this.now,
      id: this.selectedTopic.comments.length,
      msg: message
    };

    // here is to pust the comment into the comments array
    this.selectedTopic.comments.push(commentObject);


    // Tell the serice to update the topic in Server due to added Comments
    // @Idrice: we have to call subscribe() here to fire the method
    this.blogService.updateTopic(this.selectedTopic).subscribe();

    this.messageService.add({
      severity: 'success', summary: 'Commentaire ajoute',
      detail: author + ' Says ' + message
    }); // this is the pop message to confirm the comment send

    this.commentForm.reset(); // Clean the Form
  }

  // activatedRoute: Provide the topic id
  // blogService: Provide the topic object by given id, otherwise navigate to home
  private getCurrentTopic(): void {
    this.activatedRoute.params
      .subscribe(params => {
        if (params.id !== undefined) {
          this.blogService.getTopicById(params.id)
            .subscribe(data => {
              if ((data !== null) && (data !== undefined)) {
                this.header = data.title;
                this.selectedTopic = data;
                // this.setFormValue(this.item);
              } else {
                // this.resetForm();
                this.router.navigate(['/home']);
              }
            });
        }
      });
  }
}
