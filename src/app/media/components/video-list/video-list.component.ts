import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';
import { TableModule, Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppComment } from 'src/app/shared/models/app-comment';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  appVideos: AppVideo[];
  selectedVideo: AppVideoItem;
  appVideoItems: AppVideoItem[];
  cols: any[];
  selectedYear;
  public commentForm: FormGroup;
  public now: Date = new Date();// declearing the constant now to set the time

  constructor(
        private videoService: VideoService,
    //  private messageService: MessageService, // Fun to use TOAST for  i.e. Comment
        private titleService: Title // Inject to set document title on  browser
    ) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
     }

     // convenience getter for easy access to form fields
  get author() { return this.commentForm.get('author'); }
  get msg() { return this.commentForm.get('msg'); }

  ngOnInit(): void {
    this.getVideos();

    this.cols = [
      { field: 'top', header: 'Top' },
      { field: 'name', header: 'Nom' },
      { field: 'publishedDate', header: 'Date De Publication' },
      { field: 'subtitle', header: 'Subtitle' },
      { field: 'title', header: 'Title' }

    ];

    this.selectedYear = 1999;

    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => {
      this.appVideoItems = i.items;
      this.selectedVideo = this.appVideoItems[0];
    });
    this.titleService.setTitle('MNS237 - Videos'); // Adding the title Home to the MNS237  main Title

    this.commentForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      msg: new FormControl('', [
        Validators.required,
        Validators.minLength(5)])
    }
    );
  }

  select(video) {
    this.selectedVideo = video;
  }

  onClick($event) {
    this.selectedVideo = $event.value;
    console.log(this.selectedVideo);
  }


  onChange($event) {
    this.selectedYear = $event.target.value;
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.appVideos = videos);
  }

  postYourComment(theData) {
    const message = theData.msg;
    const author = theData.author;

    // @Idrice: this is how to create a object of type Comment
    const commentObject: AppComment = {
      author: theData.author,
      createdDate: this.now,
      id: this.selectedVideo.comments.length,
      msg: message
    };

    // here is to pust the comment into the comments array
    this.selectedVideo.comments.push(commentObject);


    // Tell the serice to update the topic in Server due to added Comments
    // @Idrice: we have to call subscribe() here to fire the method
    // this.videoService.updateVideo(this.selectedVideo).subscribe();
/*
    this.messageService.add({
      severity: 'success', summary: 'Commentaire ajoute',
      detail: author + ' Says ' + message
    }); // this is the pop message to confirm the comment send*/


    this.commentForm.reset(); // Clean the Form
  }

}
