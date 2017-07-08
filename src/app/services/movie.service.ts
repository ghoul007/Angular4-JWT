import { Injectable } from '@angular/core';
import { MOVIES } from '../class/movie_data';
import { Movie } from '../class/movie';

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

}