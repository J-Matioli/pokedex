import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../services/pokemon.service';

import { DetailsResolver } from './details.resolver';

describe('DetailsResolver', () => {
  let resolver: DetailsResolver;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    resolver = TestBed.inject(DetailsResolver);
    pokemonService = TestBed.inject(PokemonService)
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
