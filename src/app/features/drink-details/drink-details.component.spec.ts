import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DrinkDetailsComponent } from './drink-details';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('DrinkDetailsComponent', () => {
  let component: DrinkDetailsComponent;
  let fixture: ComponentFixture<DrinkDetailsComponent>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    activatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    });

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, DrinkDetailsComponent],
      providers: [
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.drink()).toBeNull();
    expect(component.isFavorite()).toBeFalse();
  });

  it('should have avgRating computed signal', () => {
    expect(component.avgRating()).toBe(0);
  });

  it('should have totalReviews computed signal', () => {
    expect(component.totalReviews()).toBe(0);
  });

  describe('goBack', () => {
    it('should navigate to home', () => {
      component.goBack();
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe('getFavorites', () => {
    it('should return empty array when no favorites stored', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      const favorites = component.getFavorites();
      expect(favorites).toEqual([]);
    });

    it('should return favorites from localStorage', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[1, 2, 3]');
      const favorites = component.getFavorites();
      expect(favorites).toEqual([1, 2, 3]);
    });

    it('should return empty array on error', () => {
      spyOn(localStorage, 'getItem').and.returnValue('invalid json');
      const favorites = component.getFavorites();
      expect(favorites).toEqual([]);
    });
  });

  describe('saveFavorites', () => {
    it('should save favorites to localStorage', () => {
      spyOn(localStorage, 'setItem');
      component.saveFavorites([1, 2]);
      expect(localStorage.setItem).toHaveBeenCalledWith('drinker_favorites', '[1,2]');
    });
  });

  describe('loadFavoriteState', () => {
    it('should set isFavorite to true when drink is in favorites', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[1, 2, 3]');
      // Mock drink with id 1
      (component as any).drink.set({ id: 1 } as any);
      component.loadFavoriteState();
      expect(component.isFavorite()).toBeTrue();
    });

    it('should set isFavorite to false when drink is not in favorites', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[1, 2, 3]');
      // Mock drink with id 4
      (component as any).drink.set({ id: 4 } as any);
      component.loadFavoriteState();
      expect(component.isFavorite()).toBeFalse();
    });
  });

  describe('toggleFavorite', () => {
    it('should add drink to favorites when not favorite', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[]');
      spyOn(localStorage, 'setItem');
      // Mock drink with id 1
      (component as any).drink.set({ id: 1 } as any);
      component.toggleFavorite();
      expect(component.isFavorite()).toBeTrue();
      expect(localStorage.setItem).toHaveBeenCalledWith('drinker_favorites', '[1]');
    });

    it('should remove drink from favorites when already favorite', () => {
      spyOn(localStorage, 'getItem').and.returnValue('[1, 2]');
      spyOn(localStorage, 'setItem');
      (component as any).isFavorite.set(true);
      (component as any).drink.set({ id: 1 } as any);
      component.toggleFavorite();
      expect(component.isFavorite()).toBeFalse();
      expect(localStorage.setItem).toHaveBeenCalledWith('drinker_favorites', '[2]');
    });
  });

  describe('shareDrink', () => {
    it('should use navigator.share when available', () => {
      spyOn(navigator, 'share').and.returnValue(Promise.resolve());
      (component as any).drink.set({
        id: 1,
        name: 'Test Drink',
        category: 'Test',
        rating: 4.5
      } as any);
      component.shareDrink();
      expect(navigator.share).toHaveBeenCalledWith({
        title: 'Test Drink',
        text: 'Test Drink - Test. Rating: 4.5/5',
        url: jasmine.stringContaining('/drinks/1')
      });
    });

    it('should fallback to clipboard when navigator.share is not available', () => {
      Object.defineProperty(navigator, 'share', {
        value: undefined,
        writable: true
      });
      spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
      (component as any).drink.set({
        id: 1,
        name: 'Test Drink',
        category: 'Test',
        rating: 4.5
      } as any);
      component.shareDrink();
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        jasmine.stringContaining('Test Drink')
      );
    });
  });
});
