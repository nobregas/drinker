import { Component, signal, computed, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { faFire, faStar, faMartiniGlass, faComment, faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DrinkCardComponent } from '../../shared/components/drink-card/drink-card';
import { WishlistService } from '../../core/services/wishlist.service';
import { Drink } from '../../core/models/drink.model';
import { MOCK_DRINKS } from '../../core/mock-data/mock-drinks';
import { MOCK_CATEGORIES } from '../../core/mock-data/mock-categories';
import { MOCK_REVIEWS } from '../../core/mock-data/mock-reviews';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    DrinkCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private readonly wishlistService: WishlistService,
    private readonly router: Router
  ) {}

  // Model signal for two-way binding with ngModel
  readonly searchTerm = model('');
  readonly selectedCategory = signal('');

  // Signals for state management
  readonly trendingDrinks = signal(MOCK_DRINKS.slice(0, 5));
  readonly categories = signal(MOCK_CATEGORIES);
  readonly reviews = signal(MOCK_REVIEWS);

  // Computed signal for filtered drinks
  readonly filteredDrinks = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const category = this.selectedCategory();

    return MOCK_DRINKS.filter(drink => {
      const matchesSearch = !term ||
        drink.name.toLowerCase().includes(term) ||
        drink.category.toLowerCase().includes(term);
      const matchesCategory = !category || drink.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  // Font Awesome icons
  readonly faFire = faFire;
  readonly faStar = faStar;
  readonly faMartiniGlass = faMartiniGlass;
  readonly faComment = faComment;
  readonly faArrowRight = faArrowRight;
  readonly faChevronRight = faChevronRight;

  /**
   * Check if a drink is in the wishlist
   */
  isInWishlist(drinkId: number): boolean {
    return this.wishlistService.isInWishlist(drinkId);
  }

  /**
   * Toggle wishlist status for a drink
   */
  onWishlistToggle(drink: Drink): void {
    this.wishlistService.toggleWishlist(drink);
  }

  /**
   * Navigate to drink details page
   */
  navigateToDrink(drinkId: number): void {
    this.router.navigate(['/drinks', drinkId]);
  }

  /**
   * Filter drinks by category
   */
  filterByCategory(categoryName: string): void {
    if (this.selectedCategory() === categoryName) {
      this.selectedCategory.set('');
    } else {
      this.selectedCategory.set(categoryName);
    }
  }

  /**
   * Check if a category is currently selected
   */
  isCategorySelected(categoryName: string): boolean {
    return this.selectedCategory() === categoryName;
  }
}
