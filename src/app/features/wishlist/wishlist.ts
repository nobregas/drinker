import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faMartiniGlass, faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import { DrinkCardComponent } from '../../shared/components/drink-card/drink-card';
import { WishlistService } from '../../core/services/wishlist.service';
import { Drink } from '../../core/models/drink.model';
import { MOCK_DRINKS } from '../../core/mock-data/mock-drinks';

type SortOption = 'recent' | 'price-asc' | 'price-desc' | 'rating-desc';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, DrinkCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(private readonly wishlistService: WishlistService) {
    // Initialize wishlist items
    this.updateWishlistDrinks();
  }

  // Sort options
  readonly sortOptions = [
    { value: 'recent' as SortOption, label: 'Mais Recentes' },
    { value: 'price-asc' as SortOption, label: 'Menor Preço' },
    { value: 'price-desc' as SortOption, label: 'Maior Preço' },
    { value: 'rating-desc' as SortOption, label: 'Melhor Avaliação' }
  ];

  // State signals
  readonly selectedSort = signal<SortOption>('recent');
  readonly wishlistDrinks = signal<Drink[]>([]);
  readonly isSortDropdownOpen = signal(false);

  // Computed signals
  readonly isEmpty = computed(() => this.wishlistDrinks().length === 0);

  // Font Awesome icons
  readonly faHeart = faHeart;
  readonly faMartiniGlass = faMartiniGlass;
  readonly faSortAmountDown = faSortAmountDown;
  readonly faSortAmountUp = faSortAmountUp;

  /**
   * Get sorted wishlist drinks
   */
  readonly sortedDrinks = computed(() => {
    const drinks = [...this.wishlistDrinks()];
    const sort = this.selectedSort();

    switch (sort) {
      case 'recent':
        // Already sorted by added date in service
        return drinks;
      case 'price-asc':
        return drinks.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return drinks.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return drinks.sort((a, b) => b.rating - a.rating);
      default:
        return drinks;
    }
  });

  /**
   * Update wishlist drinks from service
   */
  updateWishlistDrinks(): void {
    const drinks = this.wishlistService.getWishlistDrinks(MOCK_DRINKS);
    this.wishlistDrinks.set(drinks);
  }

  /**
   * Handle sort option change
   */
  onSortChange(option: SortOption): void {
    this.selectedSort.set(option);
    this.isSortDropdownOpen.set(false);
  }

  /**
   * Toggle sort dropdown
   */
  toggleSortDropdown(): void {
    this.isSortDropdownOpen.update(open => !open);
  }

  /**
   * Handle wishlist toggle from drink card
   */
  onWishlistToggle(drink: Drink): void {
    const removed = !this.wishlistService.toggleWishlist(drink);
    if (removed) {
      this.updateWishlistDrinks();
    }
  }

  /**
   * Check if drink is in wishlist
   */
  isInWishlist(drinkId: number): boolean {
    return this.wishlistService.isInWishlist(drinkId);
  }

  /**
   * Get selected sort option label
   */
  getSortLabel(): string {
    const option = this.sortOptions.find(opt => opt.value === this.selectedSort());
    return option?.label || 'Ordenar';
  }
}
