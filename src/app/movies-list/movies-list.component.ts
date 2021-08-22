import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared-module/movie-item.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.movies = this.searchService.movies;
    console.log(this.movies);
  }

}
