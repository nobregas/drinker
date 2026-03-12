import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faShareNodes, faHeart as faHeartSolid, faExternalLink, faFire } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { MOCK_DRINKS } from '../../core/mock-data/mock-drinks';
import { Drink } from '../../core/models/drink.model';
import { WishlistService } from '../../core/services/wishlist.service';
import { RatingComponent } from '../../shared/components/rating/rating';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card';

@Component({
  selector: 'app-drink-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, RatingComponent, ReviewCardComponent],
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor(private readonly wishlistService: WishlistService) {}

  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faShareNodes = faShareNodes;
  protected readonly faHeartSolid = faHeartSolid;
  protected readonly faHeartRegular = faHeartRegular;
  protected readonly faExternalLink = faExternalLink;
  protected readonly faFire = faFire;

  readonly drink = signal<Drink | null>(null);

  readonly isFavorite = computed(() => {
    const d = this.drink();
    return d ? this.wishlistService.isInWishlist(d.id) : false;
  });

  readonly avgRating = computed(() => {
    const d = this.drink();
    return d?.rating || 0;
  });

  readonly totalReviews = computed(() => {
    const d = this.drink();
    return d?.reviewCount || 0;
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const drinkId = parseInt(idParam, 10);
      const foundDrink = MOCK_DRINKS.find(d => d.id === drinkId);
      if (foundDrink) {
        this.drink.set(foundDrink);
      }
    }
  }

  toggleFavorite(): void {
    const currentDrink = this.drink();
    if (!currentDrink) return;

    this.wishlistService.toggleWishlist(currentDrink);
  }

  shareDrink(): void {
    const currentDrink = this.drink();
    if (!currentDrink) return;

    const shareText = `${currentDrink.name} - ${currentDrink.category}. Rating: ${currentDrink.rating}/5`;
    const shareUrl = `${window.location.origin}/drinks/${currentDrink.id}`;

    if (navigator.share) {
      navigator
        .share({
          title: currentDrink.name,
          text: shareText,
          url: shareUrl
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(`${shareText} - ${shareUrl}`).catch(console.error);
    }
  }

  goBack(): void {
    window.history.back();
  }
}
