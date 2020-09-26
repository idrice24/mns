import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Topic } from 'src/app/shared/models/topic';
import { switchMap } from 'rxjs/operators';

// REF: https://angular.io/guide/router-tutorial-toh
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {

  topic$: Observable<Topic>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {


  }


  ngOnInit(): void {
    this.topic$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getTopic(params.get('id')))
    );
  }

  gotoTopics(topic: Topic) {
    const topicId = topic ? topic.id : null;
    // Pass along the topic id if available
    // so that the blog component can select that topic.
    this.router.navigate(['/blog', { id: topicId }]);
  }

}
