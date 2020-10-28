import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';

@Component({
  selector: 'app-media-dashboard',
  templateUrl: './media-dashboard.component.html',
  styleUrls: ['./media-dashboard.component.scss']
})
export class MediaDashboardComponent implements OnInit {

  items;
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

    this.photoService.getImages().subscribe(photos => this.items = photos);

  }

}
