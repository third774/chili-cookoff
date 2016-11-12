/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CookOffService } from './cook-off.service';

describe('Service: CookOff', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookOffService]
    });
  });

  it('should ...', inject([CookOffService], (service: CookOffService) => {
    expect(service).toBeTruthy();
  }));
});
