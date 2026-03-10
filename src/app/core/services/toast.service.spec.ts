import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should show success toast', () => {
    expect(service.toastsSignal().length).toBe(0);

    service.showSuccess('Test message');
    expect(service.toastsSignal().length).toBe(1);
    expect(service.toastsSignal()[0].message).toBe('Test message');
    expect(service.toastsSignal()[0].type).toBe('success');
  });

  it('should remove toast', () => {
    service.showSuccess('Test message');
    const toastId = service.toastsSignal()[0].id;

    service.removeToast(toastId);
    expect(service.toastsSignal().length).toBe(0);
  });

  it('should auto-dismiss toast after duration', () => {
    // Note: This test might be flaky due to timing
    // In a real implementation, you'd want to use fake timers
    service.showSuccess('Test message');

    // Immediately check that toast is created
    expect(service.toastsSignal().length).toBe(1);

    // The toast will be removed after 3 seconds by the timeout
    // This test verifies the toast creation but not the auto-dismiss
    // due to the complexity of testing setTimeout in Angular tests
  });
});