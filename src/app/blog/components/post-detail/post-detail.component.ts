import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  public appCommentList: Topic[]; // @Idrice for what??
  public appCommentLists: Topic; // @Idrice for what??

  postComment = []; // creating an empty array to store the list of comments

  comment = 'idrice comment'; // we declear the comment variable which will collect the user comment


  // @Irice why should i use ActivatedRoute  in this Component?
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {

    this.getCurrentTopic();
  }

  post() {
    this.postComment.push(this.comment);
    this.comment = '';
  }
  // handler when user click on  Button
  postYourComment(topicObject) {

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
