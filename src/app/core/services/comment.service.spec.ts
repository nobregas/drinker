import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { MOCK_COMMENTS } from '../mock-data/mock-comments';
import type { Comment } from '../models/comment.model';

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService]
    });
    service = TestBed.inject(CommentService);
  });

  it('should return comments for a review', () => {
    const comments = service.getCommentsForReview(1);
    expect(comments.length).toBeGreaterThan(0);
    expect(comments.every((c: Comment) => c.reviewId === 1)).toBe(true);
  });

  it('should add a new comment', () => {
    const initialCount = service.getCommentsForReview(1).length;
    service.addComment({
      id: 999,
      reviewId: 1,
      userName: 'Test User',
      userAvatar: 'https://test.com/avatar.jpg',
      text: 'Test comment',
      timestamp: new Date().toISOString(),
      likes: 0,
      isLiked: false
    });
    const finalCount = service.getCommentsForReview(1).length;
    expect(finalCount).toBe(initialCount + 1);
  });

  it('should toggle like on comment', () => {
    const comment = service.getCommentsForReview(1)[0] as Comment;
    const initialLiked = comment.isLiked;
    const initialLikes = comment.likes;

    service.toggleLikeOnComment(comment.id);

    const updatedComment = service.getCommentsForReview(1).find((c: Comment) => c.id === comment.id) as Comment;
    expect(updatedComment?.isLiked).toBe(!initialLiked);
    expect(updatedComment?.likes).toBe(initialLiked ? initialLikes - 1 : initialLikes + 1);
  });
});