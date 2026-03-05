import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { DrinkDetailsComponent } from './features/drink-details/drink-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drinks/:id', component: DrinkDetailsComponent },
  { path: '**', redirectTo: '' }
];
