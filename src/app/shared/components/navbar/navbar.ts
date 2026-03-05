import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faPlus, faMartiniGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { WishlistService } from '../../../core/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  protected readonly router = inject(Router);

  protected readonly faBell = faBell;
  protected readonly faPlus = faPlus;
  protected readonly faMartiniGlass = faMartiniGlass;
  protected readonly faHeart = faHeart;

  constructor(protected readonly wishlistService: WishlistService) {}

  protected isRouteActive(path: string): boolean {
    return this.router.url === path;
  }

  protected isWishlistActive(): boolean {
    return this.router.url === '/wishlist';
  }
}
