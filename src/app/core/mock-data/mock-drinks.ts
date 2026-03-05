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
    verdict: 'Um clássico absoluto. O alto teor alcoólico carrega os sabores de caramelo e baunilha com muita força, finalizando com um toque apimentado de centeio.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/wild-turkey-101', price: 220 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/wild-turkey-101', price: 210 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/wild-turkey-101', price: 205 }
    ],
    sensorialNotes: [
      'Nariz de caramelo e baunilha',
      'Paladar picante de centeio',
      'Notas de madeira de carvalho',
      'Final longo e aquecedor',
      'Corpo encorpado',
      'Equilíbrio entre doce e apimentado'
    ],
    description: 'O Wild Turkey 101 é um bourbon proofed à alta temperatura, resultando em uma experiência intensa e robusta. Produzido em Lawrenceburg, Kentucky, este whiskey envelhece por 6-8 anos em barris de carvalho americano novo e carbonizado.',
    isFavorite: false
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
    verdict: 'A textura cremosa da espuma de nitrogênio é imbatível. Notas claras de malte torrado e café gelado.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/guinness-draught', price: 28 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/guinness-draught', price: 25 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/guinness-draught', price: 23 }
    ],
    sensorialNotes: [
      'Nariz de malte torrado',
      'Paladar de café gelado',
      'Textura cremosa de nitrogênio',
      'Final seco e refrescante',
      'Cor escura quase preta',
      'Notas de chocolate amargo'
    ],
    description: 'A Guinness Draught é uma stout irlandesa icônica, conhecida pela sua textura cremosa única graças ao uso de nitrogênio. Produzida em Dublin desde 1759, é uma das cervejas mais reconhecidas mundialmente.',
    isFavorite: false
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
    verdict: 'Um Cabernet Sauvignon de dia a dia. Taninos presentes e muita fruta negra, mas sem muita complexidade.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/casillero-del-diablo', price: 65 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/casillero-del-diablo', price: 60 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/casillero-del-diablo', price: 55 }
    ],
    sensorialNotes: [
      'Nariz de frutas negras',
      'Paladar de ameixa e mirtilo',
      'Taninos presentes mas suaves',
      'Final médio com notas de especiarias',
      'Corpo médio',
      'Bom equilíbrio álcool-ácido'
    ],
    description: 'O Casillero del Diablo Cabernet Sauvignon é um vinho chileno acessível e versátil, ideal para acompanhar carnes vermelhas e queijos fortes. Produzido no Vale do Maule, é conhecido pela sua constância de qualidade.',
    isFavorite: false
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
    verdict: 'Equilíbrio perfeito. Mais suave que o Wild Turkey, com notas claras de mel e laranja.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/woodford-reserve', price: 380 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/woodford-reserve', price: 350 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/woodford-reserve', price: 340 }
    ],
    sensorialNotes: [
      'Nariz floral com notas de mel',
      'Paladar de laranja e baunilha',
      'Textura aveludada',
      'Final longo e complexo',
      'Notas de madeira de carvalho tostada',
      'Equilíbrio excelente entre doce e amargo'
    ],
    description: 'O Woodford Reserve é um bourbon premium produzido em Kentucky usando o tradicional método de pot still. Envelhecido por 6-7 anos em barris de carvalho novo, é reconhecido pela sua elegância e complexidade.',
    isFavorite: false
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
    verdict: 'Uma fogueira na praia em forma líquida. Fumaça densa, iodo e um dulçor de malte surpreendente.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/lagavulin-16', price: 950 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/lagavulin-16', price: 900 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/lagavulin-16', price: 880 }
    ],
    sensorialNotes: [
      'Nariz de fumaça densa e turfa',
      'Notas de iodo e sal marinho',
      'Paladar de malte defumado',
      'Final muito longo e aquecedor',
      'Dulçor de malte surpreendente',
      'Complexidade única e memorável'
    ],
    description: 'O Lagavulin 16 é um single malt escocês da região de Islay, conhecido pelo seu caráter intensamente defumado. Envelhecido por 16 anos em barris de carvalho americano, é um dos whiskies mais icônicos e amados por entusiastas.',
    isFavorite: false
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
    verdict: 'O padrão ouro para Gin Tônica. Zimbro bem presente, fresco e seco na medida certa.',
    buyLinks: [
      { storeName: 'Supermercado Extra', url: 'https://extra.com.br/tanqueray-london-dry', price: 130 },
      { storeName: 'Zé Delivery', url: 'https://zedelivery.com.br/tanqueray-london-dry', price: 120 },
      { storeName: 'Mercado Livre', url: 'https://mercadolivre.com.br/tanqueray-london-dry', price: 115 }
    ],
    sensorialNotes: [
      'Nariz pronunciado de zimbro',
      'Notas de cítricos frescos',
      'Paladar seco e equilibrado',
      'Final longo com notas de especiarias',
      'Textura leve e refrescante',
      'Perfeito para Gin Tônica'
    ],
    description: 'O Tanqueray London Dry é um gin clássico inglês produzido desde 1830. Conhecido pelo seu perfil aromático dominado por zimbro, é a escolha favorita para clássicos como a Gin Tônica e o Dry Martini.',
    isFavorite: false
  }
];