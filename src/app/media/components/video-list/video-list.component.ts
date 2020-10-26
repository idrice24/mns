import { Component, OnInit, ViewChild } from '@angular/core';
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
  statuses: any[];
  loading: boolean = true;
  @ViewChild('dv') table: Table;

  constructor(private videoService: VideoService) { }


  ngOnInit(): void {
    this.getVideos();

    
    this.cols = [
      { field: 'top', header: 'Top' },
      { field: 'name', header: 'Nom' },
      { field: 'publishedDate', header: 'Date de Publication' },
      { field: 'subtitle', header: 'Surtitre' },
      { field: 'title', header: 'Titre' }

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
    this.loading = false;
  }

  videoSort(event){
  event.data.sort((data1, data2) => {
    let value1= data1[event.field];
    let value2 = data2[event.field];
    let result = null;

    if( value1 == null && value2 != null)
    result = -1;
    else if(value1 != null && value2 == null)
    result = 1;
    else if ( typeof value1 === 'string' && typeof value2 === 'string')
    result = value1.localeCompare(value2);
    else
    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
    return (event.order * result);
  });
  }

  onActiveChange(event){
  const value = event.target.value;
  if(value && value.trim().length){
  const activity = parseInt(value);

  if(!isNaN(activity)){
  this.table.filter(activity, 'activity', 'gte');
  }
  }
  }


}
