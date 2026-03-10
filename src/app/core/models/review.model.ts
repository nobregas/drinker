export interface Review {
  id: number;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  text: string;
  drinkName: string;
  likes?: number;
  commentCount?: number;
}
