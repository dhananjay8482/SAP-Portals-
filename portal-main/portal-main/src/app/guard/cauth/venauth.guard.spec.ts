import { TestBed } from '@angular/core/testing';

import { VenauthGuard } from './venauth.guard';

describe('VenauthGuard', () => {
  let guard: VenauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VenauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
