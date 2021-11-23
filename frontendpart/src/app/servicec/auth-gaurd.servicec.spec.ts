import { TestBed } from '@angular/core/testing';

import { AuthGaurdServicec } from './auth-gaurd.servicec';

describe('AuthGaurdServicec', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const servicec: AuthGaurdServicec = TestBed.get(AuthGaurdServicec);
    expect(servicec).toBeTruthy();
  });
});
