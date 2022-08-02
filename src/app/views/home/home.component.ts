import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public searchForm: FormGroup;
  public pokemonsList: Pokemon[] = [];
  public responseData: PokemonResponse | undefined; 
  private maxsize = 20;

  constructor(private pokemonService: PokemonService, private fb: FormBuilder) { }

  get search(): AbstractControl | null {
    return this.searchForm.get('search')
  }

  ngOnInit(): void { 

    this.searchForm = this.fb.group({
      search: [""]
    })

    this.search?.valueChanges
      .pipe(
        debounceTime(800),
      ).subscribe(data => {
        this.pokemonService.getFilterPokemonsList(this.maxsize, data).subscribe((res: PokemonResponse) => this.refreshData(res))
      })

    this.pokemonService.getAllPokemonsList(this.maxsize).subscribe((res: PokemonResponse) => this.refreshData(res))
  }

  getMore() {
    const nextPage = this.responseData!.page + 1;
    const searchText =  this.search!.value;

    this.pokemonService.getFilterPokemonsList(this.maxsize, searchText, nextPage).subscribe((res: PokemonResponse) => this.refreshData(res, false))
  }

  refreshData(res: PokemonResponse, reset = true) {
    this.pokemonsList = reset ?  res.data as [] : [...this.pokemonsList, ...res.data as []];
    this.responseData = { ...res };
  }
}
