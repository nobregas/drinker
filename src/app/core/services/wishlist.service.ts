import { Injectable, signal, computed, effect } from '@angular/core';
import { Drink } from '../models/drink.model';

const WISHLIST_STORAGE_KEY = 'drinker_wishlist';

interface WishlistItem {
  drinkId: number;
  addedAt: Date;
}

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly wishlistItems = signal<WishlistItem[]>(this.loadFromStorage());

  // Computed signal for drink IDs in wishlist
  readonly drinkIds = computed(() => this.wishlistItems().map(item => item.drinkId));

  // Computed signal for count
  readonly count = computed(() => this.wishlistItems().length);

  // Effect to persist changes to localStorage
  private readonly persistEffect = effect(() => {
    const items = this.wishlistItems();
    if (typeof window !== 'undefined') {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    }
  });

  constructor() {}

  /**
   * Add a drink to the wishlist
   * @param drink The drink to add
   */
  addToWishlist(drink: Drink): void {
    if (this.isInWishlist(drink.id)) {
      return;
    }

    this.wishlistItems.update(items => [
      ...items,
      { drinkId: drink.id, addedAt: new Date() }
    ]);
  }

  /**
   * Remove a drink from the wishlist
   * @param drinkId The ID of the drink to remove
   */
  removeFromWishlist(drinkId: number): void {
    this.wishlistItems.update(items =>
      items.filter(item => item.drinkId !== drinkId)
    );
  }

  /**
   * Toggle a drink in the wishlist
   * @param drink The drink to toggle
   * @returns true if added, false if removed
   */
  toggleWishlist(drink: Drink): boolean {
    if (this.isInWishlist(drink.id)) {
      this.removeFromWishlist(drink.id);
      return false;
    } else {
      this.addToWishlist(drink);
      return true;
    }
  }

  /**
   * Check if a drink is in the wishlist
   * @param drinkId The ID of the drink to check
   * @returns true if in wishlist, false otherwise
   */
  isInWishlist(drinkId: number): boolean {
    return this.drinkIds().includes(drinkId);
  }

  /**
   * Get all wishlist items (for the wishlist page)
   * @param allDrinks Array of all drinks to filter from
   * @returns Array of drinks in the wishlist
   */
  getWishlistDrinks(allDrinks: Drink[]): Drink[] {
    const ids = this.drinkIds();
    return allDrinks
      .filter(drink => ids.includes(drink.id))
      .sort((a, b) => {
        // Sort by addition date (most recent first)
        const aItem = this.wishlistItems().find(item => item.drinkId === a.id);
        const bItem = this.wishlistItems().find(item => item.drinkId === b.id);
        return (bItem?.addedAt.getTime() ?? 0) - (aItem?.addedAt.getTime() ?? 0);
      });
  }

  /**
   * Clear all items from the wishlist
   */
  clearWishlist(): void {
    this.wishlistItems.set([]);
  }

  /**
   * Load wishlist items from localStorage
   */
  private loadFromStorage(): WishlistItem[] {
    try {
      if (typeof window === 'undefined') {
        return [];
      }

      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (!stored) {
        return [];
      }

      const items = JSON.parse(stored) as WishlistItem[];
      // Convert date strings back to Date objects
      return items.map(item => ({
        ...item,
        addedAt: new Date(item.addedAt)
      }));
    } catch (error) {
      console.error('Error loading wishlist from storage:', error);
      return [];
    }
  }
}
