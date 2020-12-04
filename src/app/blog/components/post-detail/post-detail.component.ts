import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  public header: any;
  public comment: Topic;
  public commentForm: FormGroup;
  public comments: Topic[];
  public message: string = null;

  public selectedTopic: Topic;
  blogs: Topic[];
  blog: Topic;

  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {

    this.getCurrentTopic();
    // default data binding for comment
    this.comments = this.blogService.getComments();

    this.commentForm = new FormGroup({
    comment: new FormControl()
    });

  }

  getComment(): Topic[] {
  return this.comments;
  }

// creating a comment by pushing it
  createComment(commentForm){
      if (commentForm.valid){
      this.blogService.createComment(this.comment);
      this.message = ' submited';
            }else{
      this.message = ' not submit';
      }
          // reset the form
      this.commentForm.reset();
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
