import { TestBed } from '@angular/core/testing';

import { MeteoAPIService } from './meteo-api.service';

describe('MeteoAPIService', () => {
  let service: MeteoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
