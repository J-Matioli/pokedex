import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';
import { PokemonResponse } from '../models/pokemons-response';
import { setLoaderCardsReq, setLoaderParamsCardsReq } from '../store/loaders/loader.action';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends BaseService {

  constructor(http: HttpClient, private store: Store) { super(http) }

  getAllPokemonsList(pageSize = 20, page = 1): Observable<PokemonResponse> {
    this.store.dispatch(setLoaderCardsReq({cardsReq: true}))
    return this.getData<PokemonResponse>(`?page=${page}&pageSize=${pageSize}&select=id,name,types,images&orderBy=name&q=supertype:Pokémon`)
    .pipe(finalize(() => this.store.dispatch(setLoaderCardsReq({cardsReq: false}))))      
  }
  
  getFilterPokemonsList(pageSize = 20, search?: string, page = 1): Observable<PokemonResponse> {
    this.store.dispatch(setLoaderParamsCardsReq({paramsCardsReq: true}))
    return this.getData<PokemonResponse>(`?page=${page}&pageSize=${pageSize}&select=id,name,types,images&orderBy=name&q=supertype:Pokémon${search? ' name:' + search + '*': ''}`)
    .pipe(finalize(() => this.store.dispatch(setLoaderParamsCardsReq({paramsCardsReq: false}))))
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.getData<Pokemon>(`/${id}?select=id,name,types,images,attacks,weaknesses`)
  }
  
}
