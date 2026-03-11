export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  text: string;
  drinkName: string;
  drinkImage?: string;
  drinkCategory?: string;
  likes?: number;
  isLiked?: boolean;
  commentCount?: number;
  badges?: ReviewBadge[];
}

export type ReviewBadge = 'top-reviewer' | 'tasting-notes' | 'photo-review';
