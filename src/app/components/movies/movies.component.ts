import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(
    movieService: MovieService
  ) {}


}
