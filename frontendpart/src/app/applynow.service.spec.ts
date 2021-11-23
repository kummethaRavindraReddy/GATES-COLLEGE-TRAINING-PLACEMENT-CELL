import { TestBed } from '@angular/core/testing';

import { ApplynowService } from './applynow.service';

describe('ApplynowService', () => {
  let service: ApplynowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplynowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
