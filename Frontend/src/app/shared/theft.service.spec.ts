import { TestBed } from '@angular/core/testing';

import { TheftService } from './theft.service';

describe('TheftService', () => {
  let service: TheftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
