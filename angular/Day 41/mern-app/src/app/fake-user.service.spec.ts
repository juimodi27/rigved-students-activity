import { TestBed } from '@angular/core/testing';

import { FakeUserService } from './fake-user.service';

describe('FakeUserService', () => {
  let service: FakeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
