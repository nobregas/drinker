export interface UserProfile {
  id: number;
  username: string;
  avatar: string;
  joinDate: string;
  bio?: string;
  reviewCount: number;
  followerCount: number;
  followingCount: number;
  isFollowing: boolean;
  recentReviews?: Array<{
    drinkId: number;
    drinkName: string;
    drinkImage: string;
    rating: number;
    date: string;
  }>;
}

export interface TopReviewerBadge {
  isTopReviewer: boolean;
  threshold?: number; // Minimum reviews required
  minRating?: number; // Minimum average rating required
}