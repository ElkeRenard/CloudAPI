import { TestBed, inject } from '@angular/core/testing';

import { MyWorldService } from './my-world.service';

describe('MyWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyWorldService]
    });
  });

  it('should be created', inject([MyWorldService], (service: MyWorldService) => {
    expect(service).toBeTruthy();
  }));
});
