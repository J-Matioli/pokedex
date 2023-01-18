import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { selectCardsInfo } from 'src/app/store/cards/cards.selector';

@Component({
  selector: 'app-card-amount',
  templateUrl: './card-amount.component.html',
  styleUrls: ['./card-amount.component.scss']
})
export class CardAmountComponent implements OnInit {

  private cards$: Observable<PokemonResponse> = this.store.select(selectCardsInfo)
  .pipe(
    tap(cardsInfo => this.cardsInfo = cardsInfo)
  );

  public cardsInfo: PokemonResponse | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cards$.subscribe()
  }

}
