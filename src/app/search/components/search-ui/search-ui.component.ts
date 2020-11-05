import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.scss']
})
export class SearchUiComponent implements OnInit {

  model: any;
  disabled: boolean;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.disabled = this.model === null || this.model === undefined;
  }



}
