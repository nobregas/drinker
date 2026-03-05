import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating';
import { Review } from '../../../core/models/review.model';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  // Signal input for review data
  readonly review = input.required<Review>();
}
