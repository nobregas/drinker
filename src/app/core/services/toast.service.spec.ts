import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should show success toast', () => {
    expect(service.toasts().length).toBe(0);

    service.showSuccess('Test message');
    expect(service.toasts().length).toBe(1);
    expect(service.toasts()[0].message).toBe('Test message');
    expect(service.toasts()[0].type).toBe('success');
  });

  it('should remove toast', () => {
    service.showSuccess('Test message');
    const toastId = service.toasts()[0].id;

    service.removeToast(toastId);
    expect(service.toasts().length).toBe(0);
  });

  it('should auto-dismiss toast after duration', () => {
    jest.useFakeTimers();

    service.showSuccess('Test message');
    expect(service.toasts().length).toBe(1);

    jest.advanceTimersByTime(3000);
    expect(service.toasts().length).toBe(0);

    jest.useRealTimers();
  });
});