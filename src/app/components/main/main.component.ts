import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from "../filter/filter.component";
import {MoviesComponent} from "../movies/movies.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FilterComponent, MoviesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
