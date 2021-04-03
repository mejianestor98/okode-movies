import { HttpBackend, HttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { MovieService, SearchType } from './movie.service';

describe('MovieService API calls', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    movieService = new MovieService(httpClient);
  });

  it('exists', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));

  describe('Movies list', () => {
    it('retrieves movies list, given a text', () => {
      movieService
        .searchTitles('snowpiercer', SearchType.all)
        .subscribe((x) => {
          expect(x.Search.length).toEqual(3);
        });
      const req = httpTestingController.expectOne(
        'http://www.omdbapi.com/?s=snowpiercer&type=&apiKey=dd70d739'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        Search: [],
        totalResults: '3',
        Response: 'True',
      });
      httpTestingController.verify();
    });
  });

  describe('Movie details', () => {
    it('retrieves movie details, given imdb', () => {
      movieService
        .getTitleDetails('tt8289930')
        .subscribe((x) => {
          expect(x).toEqual({Title : "Formula 1: Drive to Survive", totalSeasons: "3", Response: "True"});
        });
      const req = httpTestingController.expectOne(
        'http://www.omdbapi.com/?i=tt8289930&plot=full&apikey=dd70d739'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        Title : "Formula 1: Drive to Survive",
        totalSeasons: "3",
        Response: 'True',
      });
      httpTestingController.verify();
    });
  });
});
