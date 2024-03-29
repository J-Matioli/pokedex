import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { Store } from '@ngrx/store';
import { hasCards, hasMoreCards } from 'src/app/store/cards/cards.selector';
import { loadAllCards } from 'src/app/store/cards/cards.action';
import { selectLoader } from 'src/app/store/loaders/loader.selector';
import { clearFilter } from 'src/app/store/filters/filters.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  public hasCards$: Observable<boolean> = this.store.select(hasCards);
  public hasMoreCards$: Observable<boolean> = this.store.select(hasMoreCards);
  
  public isLoading: Observable<boolean> = this.store.select(selectLoader('cards'))
  public isMoreCardsLoading: Observable<boolean> = this.store.select(selectLoader('moreCardsReq'))

  
  public cardsInfo: PokemonResponse | undefined; 

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(clearFilter());
    this.store.dispatch(loadAllCards());
  }
}
