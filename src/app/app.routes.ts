import { Routes } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {TopTenComponent} from "./components/top-ten/top-ten.component";

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'top-ten', component: TopTenComponent },
];
