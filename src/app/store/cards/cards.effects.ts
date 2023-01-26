import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap } from "rxjs";
import { PokemonResponse } from "src/app/models/pokemons-response";
import { CardsService } from "src/app/services/cards.service";
import { addStateCards, loadAllCards, loadedCards, loadMoreCards, loadParamsCards, setStateCards } from "./cards.action";

@Injectable({
    providedIn: 'root'
})
export class CardsEffects {
    
    constructor(
        private actions$: Actions,
        private cardsService: CardsService,
        private store: Store) { }

    loadAllCards = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadAllCards),
                switchMap(_ => {
                    return this.cardsService.getCardList()
                        .pipe(
                            tap((data: PokemonResponse) => this.store.dispatch(setStateCards({ cards: data }))),
                            map(() => loadedCards())
                        )
                })
            )
    )

    loadParamsCards = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadParamsCards),
                switchMap(props => {
                    return this.cardsService.getCardList(props.size, props.page, props.filter)
                        .pipe(
                            tap((data: PokemonResponse) => this.store.dispatch(setStateCards({ cards: data }))),
                            map(() => loadedCards())
                        )
                })
            )
    )

    loadMoreCards = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadMoreCards),
                switchMap(props => {
                    return this.cardsService.getMoreCardList(props.size, props.page, props.filter)
                        .pipe(
                            tap((data: PokemonResponse) => {
                                this.store.dispatch(addStateCards({ cards: data }))
                            }),
                            map(() => loadedCards())
                        )
                })
            )
    )
}