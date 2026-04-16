import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly toasts = signal<Toast[]>([]);
  readonly toasts$ = this.toasts.asReadonly();
  private nextId = 0;

  showSuccess(message: string, duration: number = 3000): void {
    this.showToast(message, 'success', duration);
  }

  showError(message: string, duration: number = 5000): void {
    this.showToast(message, 'error', duration);
  }

  showInfo(message: string, duration: number = 3000): void {
    this.showToast(message, 'info', duration);
  }

  private showToast(message: string, type: ToastType, duration: number): void {
    const toast: Toast = {
      id: this.nextId++,
      type,
      message,
      duration
    };

    this.toasts.update(toasts => [...toasts, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, duration);
    }
  }

  removeToast(id: number): void {
    this.toasts.update(toasts => toasts.filter(toast => toast.id !== id));
  }
}