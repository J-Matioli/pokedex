import { TestBed } from '@angular/core/testing';

import { FilteredCardsResolver } from './filtered-cards.resolver';

describe('FilteredCardsResolver', () => {
  let resolver: FilteredCardsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FilteredCardsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
