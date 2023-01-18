import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { first, Observable, of, tap } from 'rxjs';
import { Filter } from '../models/filter';
import { loadParamsCards } from '../store/cards/cards.action';
import { selectFilter } from '../store/filters/filters.selector';

@Injectable({
  providedIn: 'root'
})
export class FilteredCardsResolver implements Resolve<any> {
  constructor(private store: Store){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const searchText = route.params['id'];

    return this.store
      .pipe(
        select(selectFilter),
        first(),
        tap((filter: Filter) => {
          this.store.dispatch(loadParamsCards({size: filter?.maxPage, filter: searchText, actionType: 'filter', page: 1}));
        })
      )
  }
}
