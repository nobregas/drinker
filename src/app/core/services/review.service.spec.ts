import { ReviewService } from './review.service';
import { MOCK_REVIEWS } from '../mock-data/mock-reviews';

describe('ReviewService', () => {
  let service: ReviewService;

  beforeEach(() => {
    service = new ReviewService();
  });

  it('should return all reviews', () => {
    const reviews = service.getReviews();
    expect(reviews).toEqual(MOCK_REVIEWS);
    expect(reviews.length).toBeGreaterThan(0);
  });

  it('should return reviews filtered by category', () => {
    const whiskeyReviews = service.getReviewsByCategory('Whiskey');
    whiskeyReviews.forEach((review) => {
      expect(review.drinkName.toLowerCase()).toContain('whiskey');
    });
  });

  it('should return reviews filtered by user', () => {
    const userReviews = service.getReviewsByUser('João Silva');
    userReviews.forEach((review) => {
      expect(review.userName).toBe('João Silva');
    });
  });

  it('should return reviews sorted by most liked', () => {
    const sortedReviews = service.getReviewsSortedBy('most-liked');
    for (let i = 1; i < sortedReviews.length; i++) {
      expect(sortedReviews[i - 1].likes ?? 0).toBeGreaterThanOrEqual(
        sortedReviews[i].likes ?? 0
      );
    }
  });
});
