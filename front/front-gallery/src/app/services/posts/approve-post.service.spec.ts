import { TestBed } from '@angular/core/testing';

import { ApprovePostService } from './approve-post.service';

describe('ApprovePostService', () => {
  let service: ApprovePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
