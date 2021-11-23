import { TestBed } from '@angular/core/testing';

import { AuthenticationServicec } from './authentication.servicec';

describe('AuthenticationServicec', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const servicec: AuthenticationServicec = TestBed.get(AuthenticationServicec);
    expect(servicec).toBeTruthy();
  });
});