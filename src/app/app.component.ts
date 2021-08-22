import { Component, OnInit } from '@angular/core';
import { Search } from './shared-module/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IMDBWebSolution';
  search: Search[];
  constructor() {}

  ngOnInit() {
    // this.search = this.dataService.searchFeature;

    // private dataService: APShopService

  }
}
