import { TestBed, inject } from '@angular/core/testing';

import { ExoticService } from './exotic.service';

describe('ExoticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExoticService]
    });
  });

  it('should be created', inject([ExoticService], (service: ExoticService) => {
    expect(service).toBeTruthy();
  }));
});
