import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/models/image';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  items;
  photo : Image; // create an object image ti access it
  images: Image[];
  pictures$: Observable<Image[]>; // Get or set list of topic coming from server
  sortOrder: number;
  sortField: string;
  sortKey: SelectItem;
  sortOptions: SelectItem[];



  public now: Date = new Date();


  constructor(private photoService: PhotoService,
              private titleService: Title // Inject to set document title on  browser
    ) { }

  ngOnInit(): void {
    // Get a list of products from DB
  this.pictures$ = this.photoService.getPhotos();
  this.photoService.getImages().subscribe(photos => this.images = photos);
  this.titleService.setTitle('MNS237 - Gallery'); // Adding the title Home to the MNS237  main Title
  this.sortOptions = [
      { label: 'Photos', value: '!title' },
      { label: 'ID', value: 'id' }
    ];
    this.sortKey = this.sortOptions[0];

  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  myUploader(event){ }
}
