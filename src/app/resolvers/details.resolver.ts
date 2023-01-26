import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { first, Observable, of, tap } from 'rxjs';
import { loadCard } from '../store/details/details.action';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver {

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {  
    const id = route.params['id'];

    return this.store
      .pipe(
        first(),
        tap(_ => this.store.dispatch(loadCard({cardId: id})))
      )
  }
}
