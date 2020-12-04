import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { Comment } from 'src/app/shared/models/app-comment';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public header: any; // @Idrice to do what??
  public commentForm: FormGroup; // this component uses this variable to get information from HTML form
  public selectedTopic: Topic; // To store or get the selected topic
  public blogs: Topic[]; // @Ghislain: to List a topics
  public blog: Topic;
  public appCommentList: Topic[]; // @Idrice for what??
  public appCommentLists: Topic; // @Idrice for what??

  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {

    this.getCurrentTopic();
    this.getCurrentComment();
    this.commentForm = new FormGroup({
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

  }

  // Save to data base this user information //@Idirce wrong comment
  /** CREATE: create a comment */
  doSubscription() {

    console.log(this.comment);
    // @Idrice why? --> you want to get appComment object for what? this should come from HTML
    /*  const currentAppComment: Topic = {
        comment: this.comment.value,
        verified: false
      };

      // @idrice Why ?
      this.blogService.addAppComment(currentAppComment).subscribe();
      this.blogService.addAppComment(currentAppComment).subscribe(_ =>

        // To Clean a form
        this.commentForm.reset()); */

  }

  // @Idrice read: this comment and understand it
  // Convenience getter for easy access to form fields
  get comment() { return this.commentForm.get('comment'); }


  private getCurrentComment(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id !== undefined) {
        this.blogService.getTopicById(params.id).subscribe(data => {
          if ((data !== null) && (data !== undefined)) {
            this.appCommentLists = data;
          } else {
            this.router.navigate(['/posts']);
          }
        });
      }
    });
  }


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
