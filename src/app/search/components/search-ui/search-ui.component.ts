import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUiComponent implements OnInit {

  @ViewChild('edit', { static: false }) edit: ElementRef;

  @Input() searchField: any;
  @Input() placeholder: any;
  @Input() results: any;
  @Input() itemsCount: any;
  @Input() icon: any;

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searching(): void {
    console.log(this.edit.nativeElement.value);
    // Send the writing string in search control
    this.search.emit(this.edit.nativeElement.value);
  }

}
