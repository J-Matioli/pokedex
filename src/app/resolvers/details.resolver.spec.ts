import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CardsService } from '../services/cards.service';


import { DetailsResolver } from './details.resolver';

describe('DetailsResolver', () => {
  let resolver: DetailsResolver;
  let cardsService: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(DetailsResolver);
    cardsService = TestBed.inject(CardsService)
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
