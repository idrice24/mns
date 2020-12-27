import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent implements OnInit {

  model: any;
  disabled: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private titleService: Title // Inject to set document title on  browser
    ) {

  }

  ngOnInit(): void {
    this.disabled = this.model === null || this.model === undefined;
    this.titleService.setTitle('MNS237 - Search UI'); // Adding the title Home to the MNS237  main Title
  }



}
