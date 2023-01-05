import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { loadParamsCards } from 'src/app/store/cards/cards.action';
import { selectCardsInfo } from 'src/app/store/cards/cards.selector';

@Component({
  selector: 'app-more-cards-btn',
  templateUrl: './more-cards-btn.component.html',
  styleUrls: ['./more-cards-btn.component.scss']
})
export class MoreCardsBtnComponent implements OnInit {

  public cardInfo$: Observable<PokemonResponse> = this.store.select(selectCardsInfo)
    .pipe(
      tap(cardsInfo => this.cardsInfo = cardsInfo)
    );

  private cardsInfo: PokemonResponse;

  constructor(private store: Store) { }

  ngOnInit(): void { 
    this.cardInfo$.subscribe()
  }

  getMore() {   
    const nextPage = this.cardsInfo!.page + 1;
    const searchText =  "";

    this.store.dispatch(loadParamsCards({size: 20, filter: searchText, page: nextPage, actionType: 'moreCards'}));
  }
}
