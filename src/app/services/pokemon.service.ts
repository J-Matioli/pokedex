import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonResponse } from '../models/pokemons-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemonsList(pageSize = 250, page = 1): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${environment.urlApi}?page=${page}&pageSize=${pageSize}&select=id,name,types,images&orderBy=name&q=supertype:Pokémon`)
  }
  
  getFilterPokemonsList(pageSize = 250, search?: string, page = 1): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${environment.urlApi}?page=${page}&pageSize=${pageSize}&select=id,name,types,images&orderBy=name&q=supertype:Pokémon${search? ' name:' + search : ''}`)
  }
  
}
