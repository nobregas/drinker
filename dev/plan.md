# 🍸 Drinker - UI Plan

## 🎨 Tema Visual

### 🌑 Dark Theme (Preto + Tons de Cinza)

A aplicação seguirá um tema escuro moderno e elegante.

#### 🎨 Paleta de Cores

| Uso | Cor | Hex |
|------|------|------|
| Background Principal | Preto profundo | #0F0F0F |
| Background Secundário | Cinza escuro | #1A1A1A |
| Surface / Cards | Cinza médio | #222222 |
| Bordas | Cinza suave | #2C2C2C |
| Texto Principal | Branco suave | #F5F5F5 |
| Texto Secundário | Cinza claro | #B3B3B3 |
| Accent Primário | Âmbar (bebidas / calor) | #FF8C00 |
| Accent Hover | Âmbar claro | #FFA733 |
| Rating (Estrelas) | Dourado | #FFC107 |

#### 🧊 Estilo Geral
- Design minimalista
- Bordas levemente arredondadas (8px–12px)
- Sombras suaves
- Transições suaves (0.2s – 0.3s)
- Layout espaçado (respiração visual)

---

# 🏠 Tela 1 — Home

Primeira view da rede de divulgação de bebidas **Drinker**.

Todos os dados inicialmente serão mockados.

---

## 🔝 1. Main Section (Hero)

### Conteúdo:

**Título:**
> Descubra

**Subtítulo:**
> Novos sabores, experiências únicas e as bebidas mais comentadas da semana.

### Componentes:

- Search Bar (input centralizado)
  - Placeholder: "Buscar bebidas, marcas ou categorias..."
- Botão de Filtros
  - Ícone de filtro
  - Visualmente funcional (não executa ação)
- Background com leve gradiente escuro

---

## 🔥 2. Em Alta esta Semana (Carousel / Swiper)

Título da seção:
> 🔥 Em alta esta Semana

### Implementação:
- Swiper horizontal
- Scroll suave
- Cards com:
  - Imagem da bebida
  - Nome
  - Categoria
  - Rating (1–5 estrelas)
  - Número de reviews
  - Badge opcional: "Trending"

### Mock Data:
Exemplo:
- Bourbon Wild Oak
- Vodka Frost
- Cerveja Black River
- Vinho D’Luna
- Cachaça Serra Gold

---

## 🧭 3. Navegar por Categoria

Título:
> Navegar por categoria

### Categorias:

- Bourbon
- Whisky
- Vodka
- Cachaça
- Cerveja
- Vinho

### Layout:
- Grid responsivo
- Cards com:
  - Ícone ilustrativo
  - Nome da categoria
  - Hover com leve destaque âmbar
- Não funcional inicialmente

---

## 📊 4. Catálogo Popular

Título:
> Catálogo Popular (124 resultados)

### Layout em 2 colunas:

#### 🔹 Esquerda (70%) — Bebidas

- Lista paginada
- Grid 2 colunas
- Card de bebida contendo:
  - Imagem
  - Nome
  - Categoria
  - Rating (1–5 estrelas)
  - Preço fictício
  - Botão: "Ver detalhes"

Paginação inferior mockada:
- 1 2 3 4 Próximo

---

#### 🔹 Direita (30%) — Postagens / Reviews

Bloco fixo ou sticky

Cards de reviews contendo:
- Avatar
- Nome do usuário
- Nota
- Texto resumido
- Data
- Nome da bebida referenciada

---

# ⭐ Rating System

- 5 estrelas
- Preenchidas conforme nota mockada
- Cor dourada (#FFC107)
- Hover com leve animação
- Não interativo (somente visual)

---

# 🧱 Estrutura Angular

## 📂 Estrutura Sugerida

src/app/
│
├── core/
│ ├── models/
│ ├── mock-data/
│
├── shared/
│ ├── components/
│ │ ├── rating/
│ │ ├── drink-card/
│ │ ├── review-card/
│ │ ├── category-card/
│ │ └── carousel/
│
├── features/
│ └── home/
│ ├── home.component.ts
│ ├── home.component.html
│ └── home.component.scss
│
└── styles/
├── _variables.scss
├── _mixins.scss


---

# 🧩 SCSS Strategy

- Variáveis globais (_variables.scss)
- Uso de nesting
- Dark theme fixo
- Utilitários para:
  - Flex
  - Grid
  - Spacing
  - Typography

---

# 📱 Responsividade

### Desktop:
- Layout completo 70/30

### Tablet:
- 1 coluna para catálogo
- Reviews abaixo

### Mobile:
- Carrossel full width
- Categorias em scroll horizontal
- Lista 1 coluna

---

# 🚀 Extras (Opcional)

- Animações suaves com Angular Animations
- Skeleton loading
- Scroll reveal effect
- Hover elevation nos cards
- Scroll infinito (mock)

---

# 🎯 Objetivo da Tela

Criar uma experiência moderna, elegante e envolvente,
com foco em descoberta e engajamento social de bebidas.

---

Projeto:
**Drinker — Rede Social de Divulgação de Bebidas**
Tecnologias: Angular + SCSS
Tema: Dark Modern UI