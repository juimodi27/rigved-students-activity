import { TestBed } from '@angular/core/testing';

import { AuthenticGuard } from './authentic.guard';

describe('AuthenticGuard', () => {
  let guard: AuthenticGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
