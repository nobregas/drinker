import { Component, computed, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { UserProfile } from '../../../core/models/user-profile.model';

@Component({
  selector: 'app-user-profile-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss']
})
export class UserProfileModalComponent {
  private userProfileService = inject(UserProfileService);

  readonly faXmark = faXmark;

  readonly isOpen = model(false);
  readonly username = model('');

  readonly userProfile = computed(() => {
    if (!this.username()) return null;
    return this.userProfileService.getUserProfileByUsername(this.username());
  });

  readonly formattedJoinDate = computed(() => {
    if (!this.userProfile()) return '';
    const date = new Date(this.userProfile()!.joinDate);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  });

  close(): void {
    this.isOpen.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  toggleFollow(): void {
    // Would integrate with follow service
    console.log('Toggle follow for:', this.username());
  }
}
