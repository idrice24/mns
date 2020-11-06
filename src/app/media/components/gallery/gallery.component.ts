import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/models/image';
import { PhotoService } from 'src/app/shared/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
items;

  images: Image[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1,

    }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.funny = [0];

  }
  myUploader(event){ }


}
