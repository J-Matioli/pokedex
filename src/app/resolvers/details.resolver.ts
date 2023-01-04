import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';

import { CardsService } from '../services/cards.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver {

  constructor(private card: CardsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon> {  
    const id = route.params['id'];

    return this.card.getPokemon(id);
  }
}
