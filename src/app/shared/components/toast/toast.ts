import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { Toast, ToastType, ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  readonly toast = input.required<Toast>();

  readonly faCheckCircle = faCheckCircle;
  readonly faExclamationCircle = faExclamationCircle;
  readonly faInfoCircle = faInfoCircle;
  readonly faTimes = faTimes;

  constructor(private readonly toastService: ToastService) {}

  getIconForType(type: ToastType): any {
    switch (type) {
      case 'success':
        return this.faCheckCircle;
      case 'error':
        return this.faExclamationCircle;
      case 'info':
        return this.faInfoCircle;
    }
  }

  onClose(): void {
    this.toastService.removeToast(this.toast().id);
  }
}
