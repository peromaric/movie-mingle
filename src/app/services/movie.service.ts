import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../interfaces/movie";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getMoviesFromTo(from: number, to: number) : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`http://localhost:8080/movie/paginated/${from}/${to}`)
  }

  getTopTen() : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`http://localhost:8080/movie/top10`)
  }

  getTopTenByYear(year: number) : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`http://localhost:8080/movie/top10/${year}`)
  }
}
