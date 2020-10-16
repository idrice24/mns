import { Component, OnInit } from '@angular/core';
import { AppVideo } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  funny;
  videos: AppVideo[];

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {
    this.funny = [0];
    for (let i = 0; i < 2; i++) {
      this.funny.push(i);
    }
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

}
