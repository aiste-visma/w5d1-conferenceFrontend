import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionExistsGuard } from './session-exists.guard';

describe('sessionExistsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sessionExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
