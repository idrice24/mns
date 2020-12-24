import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-gallery',
  templateUrl: './manage-gallery.component.html',
  styleUrls: ['./manage-gallery.component.scss']
})
export class ManageGalleryComponent implements OnInit {

  constructor(
    private titleService: Title // Inject to set document title on  browser
   ) { }

  ngOnInit(): void {
    this.titleService.setTitle('MNS237 - Manage-gallery'); // Adding the title Home to the MNS237  main Title
  }

}
