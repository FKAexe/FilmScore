import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { IMovie } from '../../interfaces/imovie.interface';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule,RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  movieTitle = '';
  movie: IMovie | null = null;
  error = '';
  movieService = inject(MovieService);

  async search() {
    this.error = '';
    this.movie = null;

    try{
    const data = await this.movieService.getMovie(this.movieTitle);

    if (data.Response === 'True'){
      this.movie = data;
    }else{
      this.error = 'Movie not found';
    }
  } catch(err){
    this.error = 'An error occurred while fetching movie data';
  }
  }
}
