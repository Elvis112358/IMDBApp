import { Movie } from './../shared-module/movie-item.model';
import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input()
  movie: Movie;
  fastar = faStar;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  updateItem(id: number) {
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
