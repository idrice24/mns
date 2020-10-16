import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.css']
})
export class ManageVideoComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  appVideos: AppVideo[];
  selectedVideo;
  selectedYear;
  appVideoItems: AppVideoItem[];

  ngOnInit(): void {
    this.selectedYear = 2020;
    this.videoService.getVideos().subscribe(i => this.appVideos = i);
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
  }

  select(video) {
    this.selectedVideo = video;
  }


  onChange($event) {
    this.selectedYear = $event.target.value;
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
  }

}
