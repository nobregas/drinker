import { Component, computed, inject, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import {
  faSort,
  faHeart,
  faComment,
  faEllipsisV,
  faFilter,
  faPlus,
  faMartiniGlass
} from '@fortawesome/free-solid-svg-icons';
import { ReviewService, ReviewSortOption } from '../../core/services/review.service';
import { ReviewCardFullComponent } from '../../shared/components/review-card-full/review-card-full';
import { ReviewsSidebarComponent } from '../../shared/components/reviews-sidebar/reviews-sidebar';
import { UserProfileModalComponent } from '../../shared/components/user-profile-modal/user-profile-modal';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReviewCardFullComponent,
    ReviewsSidebarComponent,
    UserProfileModalComponent
  ],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  private reviewService = inject(ReviewService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  readonly faSort = faSort;
  readonly faHeart = faHeart;
  readonly faComment = faComment;
  readonly faEllipsisV = faEllipsisV;
  readonly faFilter = faFilter;
  readonly faPlus = faPlus;
  readonly faMartiniGlass = faMartiniGlass;

  readonly selectedSort = model<ReviewSortOption>('most-liked');
  readonly selectedCategory = model('');
  readonly searchTerm = model('');
  readonly isProfileModalOpen = model(false);
  readonly selectedUsername = model('');

  readonly sortOptions = [
    { value: 'most-liked' as ReviewSortOption, label: 'Most Liked' },
    { value: 'recent' as ReviewSortOption, label: 'Recent' },
    { value: 'highest-rated' as ReviewSortOption, label: 'Highest Rated' },
    { value: 'most-commented' as ReviewSortOption, label: 'Most Commented' }
  ];

  readonly categories = signal([
    { name: 'All', count: 247 },
    { name: 'Whiskey', count: 42 },
    { name: 'Wine', count: 38 },
    { name: 'Beer', count: 56 },
    { name: 'Vodka', count: 31 },
    { name: 'Gin', count: 28 },
    { name: 'Rum', count: 25 },
    { name: 'Tequila', count: 27 }
  ]);

  readonly reviews = computed(() => {
    let reviews = this.reviewService.getReviewsSortedBy(this.selectedSort());

    // Filter by category
    if (this.selectedCategory() && this.selectedCategory() !== 'All') {
      reviews = reviews.filter(r =>
        r.drinkCategory?.toLowerCase() === this.selectedCategory().toLowerCase()
      );
    }

    // Filter by search
    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      reviews = reviews.filter(r =>
        r.drinkName.toLowerCase().includes(term) ||
        r.text.toLowerCase().includes(term) ||
        r.userName.toLowerCase().includes(term)
      );
    }

    return reviews;
  });

  readonly isEmpty = computed(() => this.reviews().length === 0);

  onCategorySelect(categoryName: string): void {
    this.selectedCategory.set(categoryName === this.selectedCategory() ? '' : categoryName);
  }

  navigateToDrink(drinkName: string): void {
    // For now, just log. In real app, would navigate to drink details
    console.log('Navigate to drink:', drinkName);
  }

  handleLike(reviewId: number): void {
    // Like handling would go here
    console.log('Like review:', reviewId);
  }

  handleComment(reviewId: number): void {
    // Open comments modal
    console.log('Open comments for review:', reviewId);
  }

  openUserProfile(username: string): void {
    this.selectedUsername.set(username);
    this.isProfileModalOpen.set(true);
  }
}
