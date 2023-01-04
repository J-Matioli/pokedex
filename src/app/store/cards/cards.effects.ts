import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs";
import { PokemonResponse } from "src/app/models/pokemons-response";
import { CardsService } from "src/app/services/cards.service";
import { addStateCards, loadAllCards, loadedCards, loadParamsCards, setStateCards } from "./cards.action";

@Injectable({
    providedIn: 'root'
})
export class CardEffects {
    
    constructor(
        private actions$: Actions,
        private cardsService: CardsService,
        private store: Store) { }


    loadAllCards = createEffect(
        () => this.actions$
            .pipe(
                ofType(loadAllCards),
                switchMap(_ => {
                    return this.cardsService.getAllPokemonsList()
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
                    return this.cardsService.getFilterPokemonsList(props.size, props.filter, props.page)
                        .pipe(
                            tap((data: PokemonResponse) => props.actionType === 'filter' ? this.store.dispatch(setStateCards({ cards: data })) : this.store.dispatch(addStateCards({ cards: data }))),
                            map(() => loadedCards())
                        )
                })
            )
    )
}