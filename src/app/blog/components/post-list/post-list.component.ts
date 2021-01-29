import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Topic } from 'src/app/shared/models/topic';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // @Idrice: I saw this with Dollar Sign in your PDF see stocks$
  topics$: Observable<Topic[]>; // Get or set list of topic coming from server

  // @Idrice: Add a comments to each property
  blog: Topic; // here we create an object of Topic
  recentPosts: Topic[]; // here we create an arraz of Topic
  sortOptions: SelectItem[]; // same here as above
  sortKey: SelectItem; // we create an object to select items in the data base
  sortOrder: number;
  showMenu = '';
  showSubMenu = '';
  display: boolean;

  sortField: string;
  addlike = 1;

  message: string;



  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title // Inject to set document title on  browser
  ) {
    this.topics$ = this.blogService.getTopicList();
  }

  ngOnInit(): void {

    this.loadRecentPosts();
    this.titleService.setTitle('MNS237 - Post-list'); // Adding the title Home to the MNS237  main Title

    this.sortOptions = [
      { label: 'Produits', value: '!title' },

      { label: 'Blogs', value: 'title' }
    ];
    this.sortKey = this.sortOptions[0];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  openRecentPost(recentP) {
    const postId = recentP.id;
    const urlPost = 'posts/' + postId;
    console.log(urlPost);
    this.router.navigate([urlPost]);
  }

  // Take 4 topics as recent posts
  private loadRecentPosts() {
    this.blogService.getTopicList().subscribe(data => {
      this.recentPosts = data.slice(0, 4);
    });

  }

  changeBlogLike() {
    this.blog.like += 1;
  }

  changeBlogUnlike() {
    this.blog.unlike += 1;
  }
  shareBlog() { }

}
