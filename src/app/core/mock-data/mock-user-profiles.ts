import { UserProfile } from '../models/user-profile.model';
import { MOCK_DRINKS } from './mock-drinks';

export const MOCK_USER_PROFILES: UserProfile[] = [
  {
    id: 1,
    username: 'João Silva',
    avatar: 'https://picsum.photos/100/100?random=201',
    joinDate: '2024-01-15',
    bio: 'Amo uíscques e vinhos. Apaixonado por descobrir novos sabores.',
    reviewCount: 47,
    followerCount: 123,
    followingCount: 89,
    isFollowing: false,
    recentReviews: [
      {
        drinkId: MOCK_DRINKS[0].id,
        drinkName: MOCK_DRINKS[0].name,
        drinkImage: MOCK_DRINKS[0].image,
        rating: 5,
        date: '2026-03-09'
      },
      {
        drinkId: MOCK_DRINKS[1].id,
        drinkName: MOCK_DRINKS[1].name,
        drinkImage: MOCK_DRINKS[1].image,
        rating: 4,
        date: '2026-03-08'
      },
      {
        drinkId: MOCK_DRINKS[2].id,
        drinkName: MOCK_DRINKS[2].name,
        drinkImage: MOCK_DRINKS[2].image,
        rating: 5,
        date: '2026-03-07'
      }
    ]
  },
  {
    id: 2,
    username: 'Maria Santos',
    avatar: 'https://picsum.photos/100/100?random=202',
    joinDate: '2024-02-20',
    bio: 'Sommelier em formação. Foco em vinhos e cervejas artesanais.',
    reviewCount: 62,
    followerCount: 89,
    followingCount: 156,
    isFollowing: true,
    recentReviews: [
      {
        drinkId: MOCK_DRINKS[3].id,
        drinkName: MOCK_DRINKS[3].name,
        drinkImage: MOCK_DRINKS[3].image,
        rating: 5,
        date: '2026-03-10'
      },
      {
        drinkId: MOCK_DRINKS[0].id,
        drinkName: MOCK_DRINKS[0].name,
        drinkImage: MOCK_DRINKS[0].image,
        rating: 4,
        date: '2026-03-09'
      }
    ]
  }
];