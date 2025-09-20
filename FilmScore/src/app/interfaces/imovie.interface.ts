export interface IRating {
    Source: string;
    Value: string;
  }
  
  export interface IMovie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }

  export interface IMovieRating {
    movieId: string;
    scores: {
      direction: number;
      screenplay: number;
      photography: number;
      edition: number;
      narrative: number;
      characters: number;
      setting: number;
      effects: number;
      performances: number;
      soundtrack: number;
      sound: number;
      personalImpact: number;

    };
    average: number;
  }