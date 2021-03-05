import { TestBed } from '@angular/core/testing';

import { EOAPIService } from './eo-api.service';

describe('EOAPIService', () => {
  let service: EOAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EOAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
