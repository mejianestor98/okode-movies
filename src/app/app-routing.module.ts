import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: './screens/movies-list/movies-list.module#MoviesListPageModule',
  },
  {
    path: 'movies/:id',
    loadChildren: './screens/movie-details/movie-details.module#MovieDetailsPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
