import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movie } from './shared-module/movie-item.model';
import { Search } from './shared-module/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  localURL = 'https://localhost:44304/api/movies/search';
  itemVersURL = 'https://localhost:44304/api/movies/';
  movies: Movie[] = [];
  headers: string[];
  search: Search[] = [];
  putproduct: Movie = new Movie();


  constructor(public httpClient: HttpClient) {
    console.log('server started');
    this.search.push(new Search());
  }
  sendGetRequest() {
    this.movies.length = 0;
    let params = new HttpParams();
    params = params.append('rate', this.search[0].rate.toString());
    params = params.append('name', this.search[0].name);
    params = params.append('pageSize', '2');
    params = params.append('pageNumber', '2');
    this.httpClient.get<Movie[]>(
      this.localURL, {observe: 'response', params}).subscribe((resp) => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        console.log(keys);
        for (const p of resp.body as Movie[]) {
               this.movies.push(p);
               console.log('ovo je response body', resp.body);
             }
        // this.dataService.products = this.products;
           });
  }
}
