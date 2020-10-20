import { Component, OnInit } from '@angular/core';
import { AppVideo } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';
import { TableModule, Table } from 'primeng/table';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {


  videos: AppVideo[];
  appVideos: AppVideo[];
  cols: any[];

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {
        this.getVideos();
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'publishedDate', header: 'Published Date' },
            { field: 'subtitle', header: 'Subtitle' },
            { field: 'title', header: 'Title' },
            { field: 'year', header: 'Year'}
        ];
  }


  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

}
