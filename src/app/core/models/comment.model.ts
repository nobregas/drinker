export interface Comment {
  id: number;
  reviewId: number;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[]; // 1-level nested replies only
}

export interface CommentThread {
  parent: Comment;
  replies?: Comment[];
}