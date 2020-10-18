import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {



  videoItems: AppVideoItem[];


  constructor(private videoService: VideoService) { }


  ngOnInit(): void {

    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideoByYear(2020)
      .subscribe(item => this.videoItems = item.items);
  }

}
