import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() searchField: any;
  @Input() creation: any;
  @Input() found: any;
  @Input() link: any;

  constructor() { }

  ngOnInit(): void {
  }

}
