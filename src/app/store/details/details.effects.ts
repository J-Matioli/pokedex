import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap } from "rxjs";
import { Pokemon } from "src/app/models/pokemon";
import { CardsService } from "src/app/services/cards.service";
import { loadCard, loadedCard, setStateCard } from "./details.action";

@Injectable({
    providedIn: 'root'
})
export class CardEffects {
    
    constructor(
        private actions$: Actions,
        private cardsService: CardsService,
        private store: Store) { }

    loadCard = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadCard),
                switchMap(action => {
                    return this.cardsService.getCard(action.cardId)
                        .pipe(
                            tap((data: Pokemon) => this.store.dispatch(setStateCard({card: data}))),
                            map(() => loadedCard())
                        )
                })
            )
    )
}