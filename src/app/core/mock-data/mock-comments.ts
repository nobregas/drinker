import { Comment } from '../models/comment.model';

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 1,
    reviewId: 1,
    userName: 'João Silva',
    userAvatar: 'https://picsum.photos/50/50?random=105',
    text: 'Excelente avaliação! Concordo totalmente.',
    timestamp: '2026-03-10T14:30:00Z',
    likes: 5,
    isLiked: false,
    replies: [
      {
        id: 11,
        reviewId: 1,
        userName: 'Maria Santos',
        userAvatar: 'https://picsum.photos/50/50?random=106',
        text: 'Também achei ótima!',
        timestamp: '2026-03-10T15:45:00Z',
        likes: 2,
        isLiked: false
      }
    ]
  },
  {
    id: 2,
    reviewId: 1,
    userName: 'Pedro Costa',
    userAvatar: 'https://picsum.photos/50/50?random=107',
    text: 'Você já experimentou a versão envelhecida?',
    timestamp: '2026-03-10T16:00:00Z',
    likes: 3,
    isLiked: false
  }
];