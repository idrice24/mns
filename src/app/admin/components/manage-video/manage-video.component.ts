import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.css']
})
export class ManageVideoComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  videos;
  selectedVideo;

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(i => this.videos = i);

  }

  select(video) {
    this.selectedVideo = video;
  }


  onChange(event) {

  }

}
