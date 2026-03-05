import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { DrinkDetailsComponent } from './features/drink-details/drink-details';
import { WishlistComponent } from './features/wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drinks/:id', component: DrinkDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '' }
];
