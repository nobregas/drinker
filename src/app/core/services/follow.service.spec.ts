import { TestBed } from '@angular/core/testing';
import { FollowService } from './follow.service';

describe('FollowService', () => {
  let service: FollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowService);
  });

  it('should toggle follow status', () => {
    const initialFollowing = service.isFollowing(1);
    service.toggleFollow(1);
    expect(service.isFollowing(1)).toBe(!initialFollowing);
  });

  it('should get follower count', () => {
    const count = service.getFollowerCount(1);
    expect(typeof count).toBe('number');
    expect(count).toBeGreaterThanOrEqual(0);
  });

  it('should get following count', () => {
    const count = service.getFollowingCount();
    expect(typeof count).toBe('number');
    expect(count).toBeGreaterThanOrEqual(0);
  });
});