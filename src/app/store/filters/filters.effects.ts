import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { loadMoreCards, loadParamsCards } from "../cards/cards.action";
import { setFilter } from "./filters.action";

@Injectable({
    providedIn: 'root'
})
export class FilterEffects {
    
    constructor(
        private actions$: Actions,
        private store: Store) { }

    setFilters = createEffect(
        () => this.actions$
            .pipe(
                ofType(...[loadParamsCards, loadMoreCards]),
                tap(props => {
                     this.store.dispatch(setFilter({ filter: {maxPage: props.size, searchText: props.filter, page: props.page}}))
                })
            )
        ,{dispatch: false})
}