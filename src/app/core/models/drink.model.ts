export interface Drink {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  isTrending?: boolean;
  status: 'Aberta' | 'Finalizada' | 'Fechada';
  abv: string;
  country: string;
  tags: string[];
  verdict: string;
}
