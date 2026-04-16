import { UserProfileService } from './user-profile.service';
import { MOCK_USER_PROFILES } from '../mock-data/mock-user-profiles';

describe('UserProfileService', () => {
  let service: UserProfileService;

  beforeEach(() => {
    service = new UserProfileService();
  });

  it('should return user profile by id', () => {
    const profile = service.getUserProfile(1);
    expect(profile).toBeDefined();
    expect(profile?.username).toBe(MOCK_USER_PROFILES[0].username);
  });

  it('should return user profile by username', () => {
    const profile = service.getUserProfileByUsername('Maria Santos');
    expect(profile).toBeDefined();
    expect(profile?.id).toBe(2);
  });

  it('should return top reviewer badge info', () => {
    const badge = service.getTopReviewerBadge(1);
    expect(badge).toBeDefined();
    expect(typeof badge?.isTopReviewer).toBe('boolean');
  });
});