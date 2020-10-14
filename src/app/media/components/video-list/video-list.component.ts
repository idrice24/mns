import { Component, OnInit } from '@angular/core';
import { AppVideo } from 'src/app/shared/models/app-video';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  funny;
  videos: AppVideo[];

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.funny = [0];
    for (let i = 0; i < 2; i++) {
      this.funny.push(i);
    }
    this.getVideos();
  }

  getVideos(): void {
    this.userService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

}
