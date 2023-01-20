import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { hasCards, hasMoreCards } from 'src/app/store/cards/cards.selector';
import { selectLoader } from 'src/app/store/loaders/loader.selector';

@Component({
  selector: 'app-filtered-cards',
  templateUrl: './filtered-cards.component.html',
  styleUrls: ['./filtered-cards.component.scss']
})
export class FilteredCardsComponent implements OnInit {
  
  public hasCards$: Observable<boolean> = this.store.select(hasCards);
  public hasMoreCards$: Observable<boolean> = this.store.select(hasMoreCards);
  

  public isParamCardsLoading: Observable<boolean> = this.store.select(selectLoader('paramsCards'))
  public isMoreCardsLoading: Observable<boolean> = this.store.select(selectLoader('moreCardsReq'))

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
