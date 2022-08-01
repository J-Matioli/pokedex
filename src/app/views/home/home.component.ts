import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  public pokemonsList: Pokemon[] = [];
  private responseData: PokemonResponse | undefined;
  private maxsize = 100;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void { 
    this.pokemonService.getPokemonsList(this.maxsize).subscribe((res: PokemonResponse) => {
      this.pokemonsList = res.data as [];
      this.responseData = { ...res };
    })
  }

  getMore() {
    const nextPage = this.responseData!.page + 1;

    this.pokemonService.getPokemonsList(this.maxsize, nextPage).subscribe((res: PokemonResponse) => {
      this.pokemonsList = [...this.pokemonsList, ...res.data as []];
      this.responseData = { ...res };
    })
  }


}
