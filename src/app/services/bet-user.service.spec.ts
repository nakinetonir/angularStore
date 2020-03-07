import { TestBed } from '@angular/core/testing';

import { BetUserService } from './bet-user.service';

describe('BetUserService', () => {
  let service: BetUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
