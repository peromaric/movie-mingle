import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";
import {MovieComponent} from "../movie/movie.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-top-ten',
  standalone: true,
  imports: [CommonModule, MovieComponent, ReactiveFormsModule],
  templateUrl: './top-ten.component.html',
  styleUrl: './top-ten.component.css'
})
export class TopTenComponent {

  movies?: Movie[];
  yearForm: FormGroup = this.formBuilder.group({
    year: [
      null,
      [
        Validators.required,
        Validators.max(4),
        Validators.min(4),
        Validators.pattern("(19|20)\\\d{2}")
      ]
    ]
  });

  constructor(
    private movieService: MovieService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() : void {
    this.movieService.getTopTen().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      }
    );
  }

  logForm() {
    console.log(this.year)
  }

  get year() {
    return this.yearForm.get('year');
  }

}
