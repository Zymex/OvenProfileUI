/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OvenUtilityService } from './ovenUtility.service';

describe('Service: OvenUtility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OvenUtilityService]
    });
  });

  it('should ...', inject([OvenUtilityService], (service: OvenUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
