import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { Comment } from 'src/app/shared/models/app-comment';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  public header: any;
  private comment: Comment;
  public commentForm: FormGroup;
  private comments: Comment[];

  public selectedTopic: Topic;
  blogs: Topic[];
  blog: Topic;

  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private fb: FormBuilder) {
    this.createForm(); }

      // this is to create a form for user in order to comment in groups
    createForm(){
    this.commentForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, [Validators.required, Validators.minLength(2)]],
    comment: [null, [Validators.required, Validators.minLength(20)]],
    notablePeople: this.fb.array([])
    });
    }
    get notablePeople(): FormArray {
    return this.commentForm.get('notablePeople') as FormArray;
    }
// add people
    addNotablePerson(){
    this.notablePeople.push(this.fb.group({
    name: ['', Validators.required],
    title: ['', Validators.required],
    email: ['', Validators.required]
    }));
    }
removeNotablePerson(index: number){
  this.notablePeople.removeAt(index);
}

resetForm(){
  this.commentForm.reset();
}

onSubmit(){
  this.comment = Object.assign({}, this.commentForm.value);
  console.log('Saving comment', this.comment);
}

  ngOnInit(): void {

    this.getCurrentTopic();
    // default data binding for comment
    this.comments = [
    new Comment('idrice', 0, 2,  2,  'idrice.tsafouet@yahoo.com', 'this is my first comment', '')];

    this.getComment();

  }

  getComment(): Comment[] {
  return this.comments;
  }
// creating a comment by pushing it
  createComment(comment: Comment){
  const foundComment = this.comments.find(each => each.code === this.blog.id);
  if (foundComment){
  return false;
  }
  this.comments.push(comment);
  return true;
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
