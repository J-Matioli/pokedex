import { Injectable } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';

import { PokemonService } from '../services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolver {

  constructor(private pokemon: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon> {  
    const id = route.params['id'];

    return this.pokemon.getPokemon(id);
  }
}
