import { Review } from '../models/review.model';

export const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    userName: ‘João Silva’,
    userAvatar: ‘https://picsum.photos/50/50?random=101’,
    rating: 5,
    date: ‘2024-01-15’,
    text: ‘Delicioso bourbon com notas de caramelo e madeira. Perfeito para quem ama sabores intensos.’,
    drinkName: ‘Bourbon Wild Oak’,
    drinkImage: ‘https://picsum.photos/300/180?random=301’,
    drinkCategory: ‘Whiskey’,
    likes: 12,
    isLiked: false,
    commentCount: 5,
    badges: [‘top-reviewer’]
  },
  {
    id: 2,
    userName: ‘Maria Santos’,
    userAvatar: ‘https://picsum.photos/50/50?random=102’,
    rating: 4,
    date: ‘2024-01-14’,
    text: ‘Vodka muito suave e refrescante. Ideal para drinks cítricos.’,
    drinkName: ‘Vodka Frost’,
    drinkImage: ‘https://picsum.photos/300/180?random=302’,
    drinkCategory: ‘Vodka’,
    likes: 8,
    isLiked: true,
    commentCount: 3,
    badges: [‘tasting-notes’]
  },
  {
    id: 3,
    userName: ‘Pedro Costa’,
    userAvatar: ‘https://picsum.photos/50/50?random=103’,
    rating: 5,
    date: ‘2024-01-13’,
    text: ‘Cerveja artesanal com perfil malteado e amargor equilibrado. Recomendo!’,
    drinkName: ‘Cerveja Black River’,
    drinkImage: ‘https://picsum.photos/300/180?random=303’,
    drinkCategory: ‘Beer’,
    likes: 15,
    isLiked: false,
    commentCount: 7
  },
  {
    id: 4,
    userName: ‘Ana Oliveira’,
    userAvatar: ‘https://picsum.photos/50/50?random=104’,
    rating: 4,
    date: ‘2024-01-12’,
    text: ‘Vinho tinto encorpado com notas de frutas vermelhas. Parceiro perfeito para carnes.’,
    drinkName: ‘Vinho D\’Luna’,
    drinkImage: ‘https://picsum.photos/300/180?random=304’,
    drinkCategory: ‘Wine’,
    likes: 9,
    isLiked: false,
    commentCount: 4
  }
];
