import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, delay, map, Observable, share, tap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonResponse } from 'src/app/models/pokemons-response';
import { LoaderService } from 'src/app/services/loader.service';
import { CardsService } from 'src/app/services/cards.service';
import { Store } from '@ngrx/store';
import { hasCards, selectCardsInfo,  } from 'src/app/store/cards/cards.selector';
import { loadAllCards, loadParamsCards,  } from 'src/app/store/cards/cards.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cards$: Observable<Pokemon[]> = this.store.select(selectCardsInfo)
    .pipe(
      tap(cardsInfo => this.cardsInfo = cardsInfo),
      map(cardsInfo => cardsInfo.data)
    );
    
  public hasCards$: Observable<boolean> = this.store.select(hasCards);
  
  public isLoading: Observable<boolean> =  this.loader.laoding$.pipe(
    delay(0),
    share()
  );

  public searchForm: FormGroup;
  public pokemonsList: Pokemon[] = [];
  public cardsInfo: PokemonResponse | undefined; 
  private maxsize = 20;

  constructor(
    private store: Store,    
    private fb: FormBuilder,
    private loader: LoaderService ) { }

  get search(): AbstractControl | null {
    return this.searchForm.get('search')
  }

  ngOnInit(): void {

    this.store.dispatch(loadAllCards());

    this.searchForm = this.fb.group({
      search: [""]
    })

    this.search?.valueChanges
      .pipe(
        debounceTime(800),
      ).subscribe(data => {
        this.store.dispatch(loadParamsCards({size: this.maxsize, filter: data, actionType: 'filter'}));  
      })
  }

  getMore() {   
    const nextPage = this.cardsInfo!.page + 1;
    const searchText =  this.search!.value;

    this.store.dispatch(loadParamsCards({size: this.maxsize, filter: searchText, page: nextPage, actionType: 'moreCards'}));
  }
}
