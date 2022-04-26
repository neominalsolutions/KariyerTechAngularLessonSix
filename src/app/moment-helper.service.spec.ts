import { TestBed } from '@angular/core/testing';

import { MomentHelperService } from './moment-helper.service';

describe('MomentHelperService', () => {
  let service: MomentHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomentHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
