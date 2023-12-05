import { TestBed } from '@angular/core/testing';

import { AuthVerificatorService } from './auth-verificator.service';

describe('AuthVerificatorService', () => {
  let service: AuthVerificatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthVerificatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
