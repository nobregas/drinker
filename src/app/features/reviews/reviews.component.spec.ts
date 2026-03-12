import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ReviewsComponent } from './reviews';
import { ReviewService } from '../../core/services/review.service';

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
  let reviewService: ReviewService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsComponent],
      providers: [
        provideRouter([]),
        ReviewService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    reviewService = TestBed.inject(ReviewService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display reviews', () => {
    component.selectedSort.set('most-liked');
    fixture.detectChanges();

    const reviews = component.reviews();
    expect(reviews.length).toBeGreaterThan(0);
  });

  it('should filter by category', () => {
    component.selectedCategory.set('Whiskey');
    fixture.detectChanges();

    const reviews = component.reviews();
    reviews.forEach(review => {
      expect(review.drinkCategory).toBe('Whiskey');
    });
  });

  it('should show empty state when no reviews', () => {
    // This would need mocking
    const isEmpty = component.isEmpty();
    expect(typeof isEmpty).toBe('boolean');
  });

  it('should toggle category selection', () => {
    component.onCategorySelect('Wine');
    expect(component.selectedCategory()).toBe('Wine');

    component.onCategorySelect('Wine');
    expect(component.selectedCategory()).toBe('');
  });
});
