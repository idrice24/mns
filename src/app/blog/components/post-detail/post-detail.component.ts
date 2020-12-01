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


  public header: any;
  public commentForm: FormGroup;


  public selectedTopic: Topic;
  blogs: Topic[];
  blog: Topic;
  appCommentList: Topic[];
  public appCommentLists: Topic;

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

  // Save to data base this user information
  /** CREATE: create a comment */
  doSubscription() {


    const currentAppComment: Topic = {
      comment: this.comment.value,
      verified: false
    };
    this.blogService.addAppComment(currentAppComment).subscribe();
    this.blogService.addAppComment(currentAppComment).subscribe(_ =>
      // To Clean a formular
      this.commentForm.reset());

  }

  // convenience getter for easy access to form fields
  get comment() { return this.commentForm.get('comment'); }


  private getCurrentComment(): void{
  this.activatedRoute.params.subscribe(params => {
    if (params.id !== undefined ){
      this.blogService.getTopicById(params.id).subscribe(data => {
        if ((data !== null) && (data !== undefined)){
          this.appCommentLists = data;
            }else{
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
