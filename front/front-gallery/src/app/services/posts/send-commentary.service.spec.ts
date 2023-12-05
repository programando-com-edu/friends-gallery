import { TestBed } from '@angular/core/testing';

import { SendCommentaryService } from './send-commentary.service';

describe('SendCommentaryService', () => {
  let service: SendCommentaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendCommentaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
