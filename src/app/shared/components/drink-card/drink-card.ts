import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartSolid, faFire, faArrowRight, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Drink } from '../../../core/models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent {
  // Signal input for drink data
  readonly drink = input.required<Drink>();

  // Optional input for wishlist state
  readonly isInWishlist = input<boolean>(false);

  // Output for wishlist toggle event
  readonly wishlistToggle = output<Drink>();

  // Computed signal for heart icon based on wishlist state
  readonly heartIcon = computed(() => this.isInWishlist() ? faHeartSolid : faHeartRegular);

  // Font Awesome icons
  protected readonly faHeartSolid = faHeartSolid;
  protected readonly faHeartRegular = faHeartRegular;
  protected readonly faFire = faFire;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faStar = faStar;
  protected readonly faChevronRight = faChevronRight;

  onWishlistToggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistToggle.emit(this.drink());
  }
}
