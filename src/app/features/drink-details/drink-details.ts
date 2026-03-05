import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MOCK_DRINKS } from '../../core/mock-data/mock-drinks';
import { Drink } from '../../core/models/drink.model';
import { RatingComponent } from '../../shared/components/rating/rating';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card';

@Component({
  selector: 'app-drink-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent, ReviewCardComponent],
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  readonly drink = signal<Drink | null>(null);
  readonly isFavorite = signal(false);

  readonly avgRating = computed(() => {
    const d = this.drink();
    return d?.rating || 0;
  });

  readonly totalReviews = computed(() => {
    const d = this.drink();
    return d?.reviewCount || 0;
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const drinkId = parseInt(idParam, 10);
      const foundDrink = MOCK_DRINKS.find(d => d.id === drinkId);
      if (foundDrink) {
        this.drink.set(foundDrink);
        this.loadFavoriteState();
      }
    }
  }

  loadFavoriteState(): void {
    const favorites = this.getFavorites();
    const currentDrink = this.drink();
    if (currentDrink) {
      this.isFavorite.set(favorites.includes(currentDrink.id));
    }
  }

  getFavorites(): number[] {
    try {
      const stored = localStorage.getItem('drinker_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  saveFavorites(favorites: number[]): void {
    try {
      localStorage.setItem('drinker_favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Failed to save favorites:', error);
    }
  }

  toggleFavorite(): void {
    const currentDrink = this.drink();
    if (!currentDrink) return;

    const favorites = this.getFavorites();
    const newFavoriteState = !this.isFavorite();

    if (newFavoriteState) {
      favorites.push(currentDrink.id);
    } else {
      const index = favorites.indexOf(currentDrink.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }

    this.isFavorite.set(newFavoriteState);
    this.saveFavorites(favorites);
  }

  shareDrink(): void {
    const currentDrink = this.drink();
    if (!currentDrink) return;

    const shareText = `${currentDrink.name} - ${currentDrink.category}. Rating: ${currentDrink.rating}/5`;
    const shareUrl = `${window.location.origin}/drinks/${currentDrink.id}`;

    if (navigator.share) {
      navigator
        .share({
          title: currentDrink.name,
          text: shareText,
          url: shareUrl
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(`${shareText} - ${shareUrl}`).catch(console.error);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
