import { Injectable } from '@angular/core';
import { UserProfile, TopReviewerBadge } from '../models/user-profile.model';
import { MOCK_USER_PROFILES } from '../mock-data/mock-user-profiles';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  getUserProfile(userId: number): UserProfile | undefined {
    return MOCK_USER_PROFILES.find(profile => profile.id === userId);
  }

  getUserProfileByUsername(username: string): UserProfile | undefined {
    return MOCK_USER_PROFILES.find(profile => profile.username === username);
  }

  getTopReviewerBadge(userId: number): TopReviewerBadge {
    const profile = this.getUserProfile(userId);
    if (!profile) {
      return { isTopReviewer: false };
    }

    // Top reviewer: 50+ reviews with 4+ average rating
    const isTopReviewer = profile.reviewCount >= 50;
    return {
      isTopReviewer,
      threshold: 50,
      minRating: 4
    };
  }
}