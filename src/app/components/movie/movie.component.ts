import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie!: Movie
  @Input() isTopTen: boolean = false;
}
