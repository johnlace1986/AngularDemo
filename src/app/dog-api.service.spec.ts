import { TestBed, inject } from '@angular/core/testing';

import { DogApiService } from './dog-api.service';

describe('DogApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogApiService]
    });
  });

  it('should be created', inject([DogApiService], (service: DogApiService) => {
    expect(service).toBeTruthy();
  }));
});
