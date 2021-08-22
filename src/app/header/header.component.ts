import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Search } from '../shared-module/search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movieNum: number;
  @Input()
  search: Search[] = [new Search()];

  constructor(private searchService: SearchService) {
    this.search.push(new Search());
    this.search.push(new Search());
    console.log(this.search);
    console.log(this.search[0].rate);
  }

  ngOnInit(): void {
    this.search = this.searchService.search;
  }

  OnSearch() {
    console.log(this.search[this.search.length - 1]);
    console.log(this.search);
    this.searchService.search = this.search;
    this.searchService.sendGetRequest();
  }

}
