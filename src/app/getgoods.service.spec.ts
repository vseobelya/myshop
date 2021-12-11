import { TestBed } from '@angular/core/testing';

import { GetgoodsService } from './getgoods.service';

describe('GetgoodsService', () => {
  let service: GetgoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
