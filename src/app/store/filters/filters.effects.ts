import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap } from "rxjs";
import { CardsService } from "src/app/services/cards.service";
import { loadMoreCards, loadParamsCards } from "../cards/cards.action";
import { loadAutocomplete, setAutocomplete, setFilter } from "./filters.action";

@Injectable({
    providedIn: 'root'
})
export class FilterEffects {
    
    constructor(
        private actions$: Actions,
        private store: Store,
        private cardsService: CardsService) { }

    setFilters = createEffect(
        () => this.actions$
            .pipe(
                ofType(...[loadParamsCards, loadMoreCards]),
                tap(props => {
                     this.store.dispatch(setFilter({ filter: {maxPage: props.size, searchText: props.filter, page: props.page, autoComplete: []}}))
                })
            )
        ,{dispatch: false})


        setAutoComplete = createEffect(
            () => this.actions$
                .pipe(
                    ofType(loadAutocomplete),
                    switchMap(props => {
                        return this.cardsService.searchCards(props.name)
                            .pipe(
                                tap((data: any) => {
                                    this.store.dispatch(setAutocomplete({ data: data }))
                                })
                            )
                    })
                )
            ,{dispatch: false})
}