import { Component, computed, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFire,
  faTrophy,
  faStar,
  faHeart,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { ReviewService } from '../../../core/services/review.service';

interface Category {
  name: string;
  count: number;
}

@Component({
  selector: 'app-reviews-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './reviews-sidebar.component.html',
  styleUrls: ['./reviews-sidebar.component.scss']
})
export class ReviewsSidebarComponent {
  private reviewService = inject(ReviewService);

  readonly faFire = faFire;
  readonly faTrophy = faTrophy;
  readonly faStar = faStar;
  readonly faHeart = faHeart;
  readonly faComment = faComment;

  readonly selectedCategory = model('');

  readonly categories = computed<Category[]>(() => [
    { name: 'All', count: 247 },
    { name: 'Whiskey', count: 42 },
    { name: 'Wine', count: 38 },
    { name: 'Beer', count: 56 },
    { name: 'Vodka', count: 31 },
    { name: 'Gin', count: 28 },
    { name: 'Rum', count: 25 },
    { name: 'Tequila', count: 27 }
  ]);

  readonly topRatedDrinks = computed(
    () => this.reviewService.getTopRatedDrinksThisWeek()
  );

  readonly trendingReviews = computed(() => this.reviewService.getTrendingReviews());

  onCategoryClick(category: Category): void {
    this.selectedCategory.set(
      category.name === this.selectedCategory() ? '' : category.name
    );
  }

  isCategoryActive(category: Category): boolean {
    return this.selectedCategory() === category.name;
  }
}
