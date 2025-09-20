import { Routes } from '@angular/router';
import { HeroComponent } from './pages/hero/hero.component';
import { MovieRatingComponent } from './pages/movie/movie.component';
import { Search } from './pages/search/search';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'search', component: Search},
    {path: 'home', component: HeroComponent},
    {path: 'movie/:imdbID', component: MovieRatingComponent} 
];
    