import { FollowService } from './follow.service';

describe('FollowService', () => {
  let service: FollowService;

  beforeEach(() => {
    service = new FollowService();
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