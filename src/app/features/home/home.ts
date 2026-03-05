import { Component, signal, computed, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFire, faStar, faMartiniGlass, faComment } from '@fortawesome/free-solid-svg-icons';
import { CarouselComponent } from '../../shared/components/carousel/carousel';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card';
import { DrinkCardComponent } from '../../shared/components/drink-card/drink-card';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card';
import { RatingComponent } from '../../shared/components/rating/rating';
import { MOCK_DRINKS } from '../../core/mock-data/mock-drinks';
import { MOCK_CATEGORIES } from '../../core/mock-data/mock-categories';
import { MOCK_REVIEWS } from '../../core/mock-data/mock-reviews';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    CarouselComponent,
    CategoryCardComponent,
    DrinkCardComponent,
    ReviewCardComponent,
    RatingComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Model signal for two-way binding with ngModel
  readonly searchTerm = model('');

  // Signals for state management
  readonly trendingDrinks = signal(MOCK_DRINKS.slice(0, 5));
  readonly categories = signal(MOCK_CATEGORIES);
  readonly reviews = signal(MOCK_REVIEWS);

  // Computed signal for filtered drinks
  readonly filteredDrinks = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return MOCK_DRINKS;
    }
    return MOCK_DRINKS.filter(drink =>
      drink.name.toLowerCase().includes(term) ||
      drink.category.toLowerCase().includes(term)
    );
  });

  // Font Awesome icons
  readonly faFire = faFire;
  readonly faStar = faStar;
  readonly faMartiniGlass = faMartiniGlass;
  readonly faComment = faComment;
}
