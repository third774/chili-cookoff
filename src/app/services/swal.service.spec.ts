/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SwalService } from './swal.service';

describe('Service: Swal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalService]
    });
  });

  it('should ...', inject([SwalService], (service: SwalService) => {
    expect(service).toBeTruthy();
  }));
});
