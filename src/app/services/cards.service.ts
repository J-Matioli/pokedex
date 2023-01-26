import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonResponse } from '../models/pokemons-response';
import { setLoaderCardsReq, setLoaderMoreCardsReq } from '../store/loaders/loader.action';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends BaseService {

  private urlCardList = (pageSize: number, page: number, searchText?: string) => `?page=${page}&pageSize=${pageSize}&select=id,name,types,images&orderBy=name&q=supertype:Pokémon${searchText? ' name:"' + searchText + '"': ''}`;

  constructor(http: HttpClient, private store: Store) { super(http) }

  getCardList(pageSize = 20, page = 1, search?: string): Observable<PokemonResponse> {
     this.store.dispatch(setLoaderCardsReq({cardsReq: true}))
    return this.getData<PokemonResponse>(this.urlCardList(pageSize, page, search))
    .pipe(finalize(() => this.store.dispatch(setLoaderCardsReq({cardsReq: false}))))      
  }

  getMoreCardList(pageSize = 20, page = 1, search?: string): Observable<PokemonResponse> {
    this.store.dispatch(setLoaderMoreCardsReq({moreCardsReq: true}))
    return this.getData<PokemonResponse>(this.urlCardList(pageSize, page, search))
    .pipe(finalize(() => this.store.dispatch(setLoaderMoreCardsReq({moreCardsReq: false}))))
  }

  getCard(id: string): Observable<Pokemon> {
    return this.getData<Pokemon>(`/${id}?select=id,name,types,images,attacks,weaknesses`)
      .pipe(map((card: any) => card.data))
  }

  searchCards(searchText: string): Observable<{name: string}[]> {
    return this.getData<{name: string}[]>(`?page=1&pageSize=180&select=name&orderBy=name&q=supertype:Pokémon name:${searchText}*`)
      .pipe(map((card: any) => card.data))
  }
}
