import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, delay, map, Observable, share, tap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { Store } from '@ngrx/store';
import { hasCards, selectCardsInfo,  } from 'src/app/store/cards/cards.selector';
import { loadAllCards, loadParamsCards,  } from 'src/app/store/cards/cards.action';
import { selectLoader } from 'src/app/store/loaders/loader.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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


}
