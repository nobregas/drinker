import { Drink } from '../models/drink.model';

export const MOCK_DRINKS: Drink[] = [
  {
    id: 1,
    name: 'Wild Turkey 101',
    category: 'Bourbon',
    rating: 4.5,
    status: 'Aberta',
    // Foto de um Bourbon puro no copo
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80',
    abv: '50.5%',
    country: 'EUA',
    price: 220,
    reviewCount: 156,
    isTrending: true,
    tags: ['#Spicy', '#Oak', '#Caramel', '#Bold'],
    verdict: 'Um clássico absoluto. O alto teor alcoólico carrega os sabores de caramelo e baunilha com muita força, finalizando com um toque apimentado de centeio.'
  },
  {
    id: 2,
    name: 'Guinness Draught',
    category: 'Cerveja',
    rating: 4.0,
    status: 'Finalizada',
    // Foto de uma pint de cerveja escura (Stout) com espuma cremosa
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
    abv: '4.2%',
    country: 'Irlanda',
    price: 25,
    reviewCount: 123,
    isTrending: true,
    tags: ['#Roasted', '#Coffee', '#Creamy'],
    verdict: 'A textura cremosa da espuma de nitrogênio é imbatível. Notas claras de malte torrado e café gelado.'
  },
  {
    id: 3,
    name: 'Casillero del Diablo',
    category: 'Vinho',
    rating: 3.5,
    status: 'Fechada',
    // Foto elegante servindo vinho tinto
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80',
    abv: '13.5%',
    country: 'Chile',
    price: 60,
    reviewCount: 201,
    isTrending: false,
    tags: ['#DarkFruit', '#Tannic', '#Everyday'],
    verdict: 'Um Cabernet Sauvignon de dia a dia. Taninos presentes e muita fruta negra, mas sem muita complexidade.'
  },
  {
    id: 4,
    name: 'Woodford Reserve',
    category: 'Bourbon',
    rating: 5.0,
    status: 'Aberta',
    // Foto de um whiskey em copo tumbler elegante, combinando com o estilo premium
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    abv: '43.2%',
    country: 'EUA',
    price: 350,
    reviewCount: 98,
    isTrending: true,
    tags: ['#Smooth', '#Honey', '#Citrus'],
    verdict: 'Equilíbrio perfeito. Mais suave que o Wild Turkey, com notas claras de mel e laranja.'
  },
  {
    id: 5,
    name: 'Lagavulin 16',
    category: 'Whisky',
    rating: 5.0,
    status: 'Fechada',
    // Foto de um whisky em copo de degustação (Glencairn), ideal para Single Malts
    image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=600&q=80',
    abv: '43%',
    country: 'Escócia',
    price: 900,
    reviewCount: 87,
    isTrending: true,
    tags: ['#Peat', '#Smoke', '#SeaSalt'],
    verdict: 'Uma fogueira na praia em forma líquida. Fumaça densa, iodo e um dulçor de malte surpreendente.'
  },
  {
    id: 6,
    name: 'Tanqueray London Dry',
    category: 'Gin',
    rating: 4.2,
    status: 'Aberta',
    // Foto de um drink Gin & Tônica bem fresco com limão
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    abv: '47.3%',
    country: 'Inglaterra',
    price: 120,
    reviewCount: 145,
    tags: ['#Juniper', '#Citrus', '#Classic'],
    verdict: 'O padrão ouro para Gin Tônica. Zimbro bem presente, fresco e seco na medida certa.'
  }
];