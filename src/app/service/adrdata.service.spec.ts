import { TestBed } from '@angular/core/testing';

import { ADRDataService } from './adrdata.service';

describe('AdrdataService', () => {
  let service: ADRDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADRDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
