import { TestBed } from '@angular/core/testing';

import { ADRPredictionService } from './adrprediction.service';

describe('AdrpredictionService', () => {
  let service: ADRPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADRPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
