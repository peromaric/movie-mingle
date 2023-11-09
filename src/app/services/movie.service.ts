import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getMoviesFromTo(from: number, to: number) : Observable<any> {
    return this.httpClient.get(`http://localhost:8080/movie/paginated/${from}/${to}`);
  }
}
