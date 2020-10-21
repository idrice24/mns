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


  videos: AppVideo[];
  selectedVideo;
  selectedYear;
  appVideoItems: AppVideoItem[];
  appVideos: AppVideo[];

  cols: any[];
  yearFilter: number;
  yearTimeout: any;

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {
        this.getVideos();
        this.cols = [
            { field: 'top',  header: 'Top'},
            { field: 'name', header: 'Name' },
            { field: 'publishedDate', header: 'Published Date' },
            { field: 'subtitle', header: 'Subtitle' },
            { field: 'title', header: 'Title' }
        ];
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

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  /*reset(){
  this.first= 0;
  }*/
  onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }

   /*     this.yearTimeout = setTimeout(() => {
            tt.filter(event.value, 'year', 'gt');
        }, 250);
    }*/

}
}