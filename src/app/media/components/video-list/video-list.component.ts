import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';
import { TableModule, Table } from 'primeng/table';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  appVideos: AppVideo[];
  selectedVideo: AppVideoItem;
  selectedYear;
  appVideoItems: AppVideoItem[];
  cols: any[];

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {
    this.getVideos();

    // TODO@Idrice : name in french
    this.cols = [
      { field: 'top', header: 'Top' },
      { field: 'name', header: 'Name' },
      { field: 'publishedDate', header: 'Published Date' },
      { field: 'subtitle', header: 'Subtitle' },
      { field: 'title', header: 'Title' }

    ];
    this.selectedYear = 1999;

    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => {
      this.appVideoItems = i.items;
      this.selectedVideo = this.appVideoItems[0];
    });
  }

  select(video) {
    this.selectedVideo = video;
  }

  onChange($event) {
    this.selectedYear = $event.target.value;
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.appVideos = videos);
  }

}
