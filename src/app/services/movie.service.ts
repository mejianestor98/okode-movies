import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episodes',
  game = 'game'
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'dd70d739';

  constructor(private http: HttpClient) {   }

  searchTitles(title: string, type: SearchType): Observable<any>{

    return this.http.get(`${this.url}?s=${encodeURI(title)}&type${type}&apiKey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );

  }

  getTitleDetails(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
