import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchString: any;
  users$;
  found: any;
  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.users$ = this.activatedRoute.paramMap.pipe(
       switchMap((params: ParamMap) => {
         this.searchString = params.get('search');
         this.found = params.getAll('?');
         console.log(this.searchString);
         return this.searchService.getDummy();
       }));*/
  }
}


