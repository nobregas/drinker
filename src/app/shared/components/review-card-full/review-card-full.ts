import { Component, computed, inject, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import {
  faHeart,
  faComment,
  faEllipsisV,
  faExpand
} from '@fortawesome/free-solid-svg-icons';
import { Review } from '../../../core/models/review.model';
import { RatingComponent } from '../rating/rating';

@Component({
  selector: 'app-review-card-full',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RatingComponent],
  templateUrl: './review-card-full.component.html',
  styleUrls: ['./review-card-full.component.scss']
})
export class ReviewCardFullComponent {
  private router = inject(Router);

  readonly faHeart = faHeart;
  readonly faComment = faComment;
  readonly faEllipsisV = faEllipsisV;
  readonly faExpand = faExpand;

  readonly review = input.required<Review>();
  readonly isExpanded = model(false);
  readonly isLikedByExpanded = model(false);

  readonly like = output<number>();
  readonly comment = output<number>();
  readonly navigateToDrink = output<string>();
  readonly viewProfile = output<string>();

  readonly hasImage = computed(() => !!this.review().drinkImage);
  readonly hasBadges = computed(
    () => this.review().badges && this.review().badges!.length > 0
  );

  toggleExpanded(): void {
    this.isExpanded.update(expanded => !expanded);
  }

  toggleLikedBy(): void {
    this.isLikedByExpanded.update(expanded => !expanded);
  }

  onLike(): void {
    this.like.emit(this.review().id);
  }

  onComment(): void {
    this.comment.emit(this.review().id);
  }

  onNavigateToDrink(): void {
    this.navigateToDrink.emit(this.review().drinkName);
  }

  onViewProfile(): void {
    this.viewProfile.emit(this.review().userName);
  }

  getRelativeTime(dateStr: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  }
}
