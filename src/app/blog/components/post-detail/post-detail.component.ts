import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public header: any; // @Idrice to do what?? // You can use topic object directly

  public commentForm: FormGroup; // this component uses this variable to get information from HTML form
  public selectedTopic: Topic; // To store or get the selected topic
  public blogs: Topic[]; // @Ghislain: to List a topics
  public blog: Topic;

  postComment = []; // creating an empty array to store the list of comments
  comment = 'idrice comment'; // we declear the comment variable which will collect the user comment


  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private messageService: MessageService, // Fun to use TOAST for  i.e. Comment
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {

    this.getCurrentTopic();

    this.commentForm = new FormGroup({
      name: new FormControl('', [
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
  postYourComment(theData) {
    const msg = theData.msg;
    const au = theData.name;

    const commentObject = {
      author: '',
      createdDate: theData.name,
      content: msg
    };
    this.selectedTopic.comments.push(commentObject);


    // Send it to server --> @Idrice check hero app from angular page : https://angular.io/tutorial/toh-pt6#update-heroes
    // Copy it an replace Hero to Topic
    this.blogService.updateTopic(this.selectedTopic).subscribe();

    this.messageService.add({ severity: 'success', summary: 'Commentaire ajoute', detail: au + ' Says ' + msg });
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
