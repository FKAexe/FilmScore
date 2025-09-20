import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMovie } from '../interfaces/imovie.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = ' http://www.omdbapi.com/?i=tt3896198&apikey=c9effc08';
  private httpClient = inject(HttpClient);

  getMovie(title: string): Promise<IMovie>{
    const url = this.baseUrl + `&t=${title}`;
    return lastValueFrom(this.httpClient.get<IMovie>(url));
  }
}
