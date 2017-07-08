import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movie.service';
import { Movie } from '../class/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})


export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) { }
  getMovies(): void {
    this.moviesService.getMovies().then(movies => this.movies = movies);
  }
  ngOnInit() {
    this.getMovies();
  }
}
