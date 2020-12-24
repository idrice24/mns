import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchString: any;
  users$;
  found: any;
  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute,
    private titleService: Title // Inject to set document title on  browser
    ) { }

  ngOnInit(): void {
    /* this.users$ = this.activatedRoute.paramMap.pipe(
       switchMap((params: ParamMap) => {
         this.searchString = params.get('search');
         this.found = params.getAll('?');
         console.log(this.searchString);
         return this.searchService.getDummy();
       }));*/
       this.titleService.setTitle('MNS237 - Search-result'); // Adding the title Home to the MNS237  main Title
  }
}


