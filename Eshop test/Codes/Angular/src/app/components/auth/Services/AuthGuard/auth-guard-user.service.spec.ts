import { TestBed } from '@angular/core/testing';

import { AuthGuardUserService } from './auth-guard-user.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardUserService = TestBed.get(AuthGuardUserService);
    expect(service).toBeTruthy();
  });
});
