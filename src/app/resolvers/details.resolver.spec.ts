import { TestBed } from '@angular/core/testing';

import { DetailsResolver } from './details.resolver';

describe('DetailsResolver', () => {
  let resolver: DetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
