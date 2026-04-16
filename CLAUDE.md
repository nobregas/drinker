# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Drinker** is a drink/beverage discovery and social networking application built with Angular 21. It's a dark-themed modern UI for discovering and sharing reviews about alcoholic beverages. The project uses standalone components with Angular signals for reactive state management.

## Development Commands

### Start Development Server
```bash
npm start
# or
ng serve
```
Runs the dev server at `http://localhost:4200/` with hot reload.

** Important: After each code change, validate if the build is working:

### Build Project
```bash
npm run build
# or
ng build
```
Builds for production by default. Use `ng build --configuration development` for development build.

### Watch Mode
```bash
npm run watch
```
Builds and watches for changes (development configuration).

### Run Tests
```bash
npm test
# or
ng test
```
Runs unit tests using Vitest.

### Generate Components
```bash
ng generate component component-name
```
New components use standalone pattern and SCSS by default.

## Architecture

### Directory Structure

```
src/app/
├── app.ts                     # Root component with Navbar and RouterOutlet
├── app.config.ts              # Angular app configuration
├── app.routes.ts              # Route definitions
├── core/
│   ├── models/                # TypeScript interfaces (Drink, Category, Review)
│   └── mock-data/             # Mock data files (MOCK_DRINKS, MOCK_CATEGORIES, MOCK_REVIEWS)
├── features/
│   └── home/                  # Feature modules/pages
│       ├── home.ts
│       ├── home.component.html
│       └── home.component.scss
├── shared/
│   └── components/            # Reusable UI components
│       ├── navbar/
│       ├── carousel/
│       ├── category-card/
│       ├── drink-card/
│       ├── review-card/
│       └── rating/
└── styles/
    ├── _variables.scss        # Global SCSS variables (colors, spacing, typography)
    └── _mixins.scss           # SCSS mixins (flex, grid, cards, buttons)
```

### Key Architectural Patterns

#### Standalone Components
All components use Angular's standalone pattern with explicit imports. Components declare their dependencies in the `imports` array rather than using `NgModule`.

#### Signals for State Management
The project uses Angular signals extensively:
- `signal()` - For writable state
- `computed()` - For derived state
- `input()` / `model()` - For component inputs and two-way binding
- `readonly` - Used for all signal properties

Example from `home.ts`:
```typescript
readonly searchTerm = model('');
readonly filteredDrinks = computed(() => {
  const term = this.searchTerm().trim().toLowerCase();
  if (!term) return MOCK_DRINKS;
  return MOCK_DRINKS.filter(drink =>
    drink.name.toLowerCase().includes(term) ||
    drink.category.toLowerCase().includes(term)
  );
});
```

#### Component Communication
- Parent-to-child: Signal inputs via `input.required<T>()` or `input<T>(default)`
- Two-way binding: Model signals via `model<T>()`

#### SCSS Architecture
- Global variables defined in `_variables.scss` (colors, spacing, typography)
- Reusable mixins in `_mixins.scss` (flex, grid, cards, buttons)
- Fixed dark theme with predefined color palette
- Component styles use component-scoped SCSS files

### Design System

#### Color Palette (Dark Theme)
- Backgrounds: `#0F0F0F` (primary), `#1A1A1A` (secondary), `#222222` (surface)
- Text: `#F5F5F5` (primary), `#B3B3B3` (secondary)
- Accents: `#FF8C00` (primary - amber), `#FFA733` (hover), `#FFC107` (rating - gold)
- Borders: `#2C2C2C`

#### Component Hierarchy
- **App** → Navbar + RouterOutlet
- **Home** → Hero section + Carousel + CategoryGrid + PopularCatalog (split layout: 70% drinks, 30% reviews)
- **Shared Components**: DrinkCard, ReviewCard, CategoryCard, Rating, Carousel

### Data Models

#### Drink Model
```typescript
{
  id, name, category, price, rating, reviewCount, image,
  isTrending?, status, abv, country, tags, verdict
}
```

#### Category Model
```typescript
{
  id, name, icon
}
```

#### Review Model
```typescript
{
  id, userName, userAvatar, rating, date, text, drinkName
}
```

## TypeScript Configuration

Strict mode enabled with additional compiler options:
- `noImplicitOverride`
- `noPropertyAccessFromIndexSignature`
- `noImplicitReturns`
- `noFallthroughCasesInSwitch`

Angular compiler options enforce strict templates and injection parameters.

## Code Style

- Prettier configured with 100-character line width and single quotes
- Angular HTML parser used for formatting HTML files
- Font Awesome for icons (solid and regular icon sets)

## Testing

Tests use Vitest with Angular's test utilities. Test files follow the pattern `*.spec.ts` alongside component files.

## Current Feature State

The app is in early development with mock data. The home page is the main view, featuring:
- Search bar with filtering
- Trending drinks carousel
- Category navigation grid
- Popular catalog with drink cards
- Review sidebar

All data is mocked from `core/mock-data/` files. No API integration yet.

## Rules
You must never write any code that does not follow the design system and code style rules.
You must never write hexcode, etc... always look for the common styles at root src

### Template Rules
- **No service calls in templates**: Never call service methods directly in HTML templates. Always expose data through component properties (signals or computed signals). Templates should only bind to component properties, not service methods.

**Bad example:**
```html
<span>{{ wishlistService.count() }}</span>
```

**Good example:**
```typescript
// Component
readonly wishlistCount = toSignal(wishlistService.count$);
```
```html
<!-- Template -->
<span>{{ wishlistCount() }}</span>
```