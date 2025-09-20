// movie-rating.component.ts
import { Component, Input } from '@angular/core';
import { IMovieRating } from '../../interfaces/imovie.interface';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie.component.html',
})
export class MovieRatingComponent {
  @Input() imdbID: string = '';
  rating: IMovieRating = {
    movieId: '',
    scores: {
      direction: 0,
      screenplay: 0,
      photography: 0,
      edition: 0,
      narrative: 0,
      characters: 0,
      setting: 0,
      effects: 0,
      performances: 0,
      soundtrack: 0,
      sound: 0,
      personalImpact: 0,
    },
    average: 0,
  };
  ngOnInit(){
    console.log(this.imdbID);
  }
  updateScore(category: keyof IMovieRating['scores'], value: number) {
    this.rating.scores[category] = value;
    this.calculateAverage();
  }

  calculateAverage() {
    const values = Object.values(this.rating.scores);
    this.rating.average = values.reduce((a, b) => a + b, 0) / values.length;
  }

  categories: (keyof IMovieRating['scores'])[] = [
    'direction',
    'screenplay',
    'photography',
    'edition',
    'narrative',
    'characters',
    'setting',
    'effects',
    'performances',
    'soundtrack',
    'sound',
    'personalImpact',
  ];
  getScore(category: keyof IMovieRating['scores']) {
    return this.rating.scores[category];
  
  }
  stars = [1, 2, 3, 4, 5];
  updateScoreSafe(category: string, value: number) {
    this.updateScore(category as keyof IMovieRating['scores'], value);
  }
  
  getScoreSafe(category: string): number {
    return this.getScore(category as keyof IMovieRating['scores']);
  }
  submitRating() {
    const url = `https://letterboxd.com/imdb/${this.imdbID}/`;
  window.open(url, '_blank');
}
}