import { TestBed } from '@angular/core/testing';

import { BasicAuthInterceptionService } from './basic-auth-interception.service';

describe('BasicAuthInterceptonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthInterceptionService = TestBed.get(BasicAuthInterceptionService);
    expect(service).toBeTruthy();
  });
});
