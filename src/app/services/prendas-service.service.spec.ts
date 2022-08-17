import { TestBed } from '@angular/core/testing';

import { PrendasServiceService } from './prendas-service.service';

describe('PrendasServiceService', () => {
  let service: PrendasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrendasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
