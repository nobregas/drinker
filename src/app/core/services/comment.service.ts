import { Injectable, signal } from '@angular/core';
import { Comment } from '../models/comment.model';
import { MOCK_COMMENTS } from '../mock-data/mock-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments = signal<Comment[]>([...MOCK_COMMENTS]);

  getCommentsForReview(reviewId: number): Comment[] {
    return this.comments().filter(comment => comment.reviewId === reviewId);
  }

  addComment(comment: Comment): void {
    this.comments.update(comments => [...comments, comment]);
  }

  toggleLikeOnComment(commentId: number): void {
    this.comments.update(comments =>
      comments.map(comment =>
        comment.id === commentId
          ? { ...comment, isLiked: !comment.isLiked, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 }
          : comment
      )
    );
  }

  addReply(parentCommentId: number, reply: Comment): void {
    this.comments.update(comments =>
      comments.map(comment => {
        if (comment.id === parentCommentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply]
          };
        }
        return comment;
      })
    );
  }
}