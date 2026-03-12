import { Injectable, signal } from '@angular/core';
import { Review } from '../models/review.model';
import { MOCK_REVIEWS } from '../mock-data/mock-reviews';

export type ReviewSortOption =
  | 'recent'
  | 'most-liked'
  | 'highest-rated'
  | 'most-commented';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviews = signal<Review[]>([...MOCK_REVIEWS]);

  getReviews(): Review[] {
    return this.reviews();
  }

  getReviewsByCategory(category: string): Review[] {
    return this.reviews().filter((review) =>
      review.drinkName.toLowerCase().includes(category.toLowerCase())
    );
  }

  getReviewsByUser(userName: string): Review[] {
    return this.reviews().filter((review) => review.userName === userName);
  }

  getReviewsSortedBy(sort: ReviewSortOption): Review[] {
    const reviews = [...this.reviews()];

    switch (sort) {
      case 'most-liked':
        return reviews.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      case 'highest-rated':
        return reviews.sort((a, b) => b.rating - a.rating);
      case 'most-commented':
        return reviews.sort(
          (a, b) => (b.commentCount || 0) - (a.commentCount || 0)
        );
      case 'recent':
      default:
        return reviews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }
  }

  getTopRatedDrinksThisWeek(): Array<{
    drinkId: number;
    drinkName: string;
    drinkImage: string;
    rating: number;
    reviewCount: number;
  }> {
    // Group reviews by drink
    const drinkMap = new Map<
      number,
      {
        drinkName: string;
        drinkImage: string;
        ratings: number[];
        reviewCount: number;
      }
    >();

    this.reviews().forEach((review) => {
      const existing = drinkMap.get(review.id);
      if (existing) {
        existing.ratings.push(review.rating);
        existing.reviewCount++;
      } else {
        drinkMap.set(review.id, {
          drinkName: review.drinkName,
          drinkImage: review.drinkImage || '',
          ratings: [review.rating],
          reviewCount: 1
        });
      }
    });

    // Calculate averages and sort
    return Array.from(drinkMap.entries())
      .map(([drinkId, data]) => ({
        drinkId,
        drinkName: data.drinkName,
        drinkImage: data.drinkImage,
        rating: data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length,
        reviewCount: data.reviewCount
      }))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
  }

  getTrendingReviews(): Review[] {
    // Trending = high engagement (likes + comments) from past 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return this
      .reviews()
      .filter((review) => new Date(review.date) >= sevenDaysAgo)
      .map((review) => ({
        ...review,
        engagementScore:
          (review.likes || 0) * 2 + (review.commentCount || 0)
      }))
      .sort((a: any, b: any) => b.engagementScore - a.engagementScore)
      .slice(0, 5)
      .map(({ engagementScore, ...review }) => review);
  }
}
