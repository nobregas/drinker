import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  // Signal input for rating value
  readonly rating = input<number>(0);

  readonly faStar = faStar;
  readonly faStarRegular = faStarRegular;
  readonly stars = [1, 2, 3, 4, 5];

  // Computed signals for star display
  readonly starIcons = computed(() => {
    const currentRating = this.rating();
    return this.stars.map(star => ({
      star,
      icon: star <= currentRating ? this.faStar : this.faStarRegular,
      isFilled: star <= currentRating || (star > currentRating && star < currentRating + 1)
    }));
  });
}
