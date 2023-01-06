import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { Store } from '@ngrx/store';
import { hasCards, selectCardsInfo,  } from 'src/app/store/cards/cards.selector';
import { loadAllCards } from 'src/app/store/cards/cards.action';
import { selectLoader } from 'src/app/store/loaders/loader.selector';
import { clearFilter } from 'src/app/store/filters/filters.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public cards$: Observable<Pokemon[]> = this.store.select(selectCardsInfo)
    .pipe(
      tap(cardsInfo => this.cardsInfo = cardsInfo),
      map(cardsInfo => cardsInfo.data)
    );
    
  public hasCards$: Observable<boolean> = this.store.select(hasCards);
  
  public isLoading: Observable<boolean> = this.store.select(selectLoader('cards'))
  public isParamCardsLoading: Observable<boolean> = this.store.select(selectLoader('paramsCards'))

  
  public pokemonsList: Pokemon[] = [];
  public cardsInfo: PokemonResponse | undefined; 

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadAllCards());
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearFilter());
  }

}
