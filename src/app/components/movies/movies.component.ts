import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";
import {MovieComponent} from "../movie/movie.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] | undefined;
  moviesToDisplay: Movie[] = [];
  from: number = 1;
  to: number = 100;

  constructor(
      private movieService: MovieService
  ) {}

  ngOnInit() : void {
    this.movieService.getMoviesFromTo(this.from,this.to).subscribe(
      (data: Movie[]) => {
        this.movies = data;
        this.moviesToDisplay = this.movies;
      }
    );
  }

  onScroll(event: any) {
    // height + pixel + offset >= total height
    if (event.target.offsetHeight + event.target.scrollTop + 50 >= event.target.scrollHeight) {
      if (this.movies) {
        this.from += 100;
        this.to += 100;
        this.movieService.getMoviesFromTo(this.from, this.to).subscribe(
          (data: Movie[]) => {
            this.movies?.push(...data);
            console.log("Updating movie list...");
          });
      }
    }
  }
}
