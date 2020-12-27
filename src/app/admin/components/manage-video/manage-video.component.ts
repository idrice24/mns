import { Component, OnInit } from '@angular/core';
import { AppVideo, AppVideoItem } from 'src/app/shared/models/app-video';
import { VideoService } from 'src/app/shared/services/video.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.scss']
})
export class ManageVideoComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private titleService: Title // Inject to set document title on  browser
    ) { }

  appVideos: AppVideo[];
  selectedVideo;
  selectedYear;
  appVideoItems: AppVideoItem[];

  ngOnInit(): void {
    this.selectedYear = 2020;
    this.videoService.getVideos().subscribe(i => this.appVideos = i);
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
    this.titleService.setTitle('MNS237 - Manage-video'); // Adding the title Home to the MNS237  main Title
  }

  select(video) {
    this.selectedVideo = video;
  }


  onChange($event) {
    this.selectedYear = $event.target.value;
    this.videoService.getVideoByYear(this.selectedYear).subscribe(i => this.appVideoItems = i.items);
  }

}
