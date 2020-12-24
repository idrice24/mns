import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';
import { TableModule, Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';

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

  constructor(private videoService: VideoService,
    private titleService: Title // Inject to set document title on  browser
    ) { }


  ngOnInit(): void {
    this.getVideos();

    // TODO@Idrice : name in french
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

}
