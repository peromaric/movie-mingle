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
  validationError: boolean = false;
  yearForm: FormGroup = this.formBuilder.group({
    year: [
      null,
      [
        Validators.required,
        Validators.max(2017),
        Validators.min(1950)
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

  requestTopTenByYear(validationDialog: HTMLDialogElement) {
    if(this.year?.valid) {
      this.movieService.getTopTenByYear(this.year.value).subscribe(
        (data: Movie[]) => {
          this.movies = data;
        }
      )
    } else {
      this.year?.setValue(null);
      validationDialog.showModal();
      setTimeout(() => validationDialog.close(), 1500);
    }
  }

  get year() {
    return this.yearForm.get('year');
  }
}
