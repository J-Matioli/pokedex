import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { clearStateCard } from 'src/app/store/details/details.action';
import { selectCardAttacks, selectCardImages, selectCardInfo, selectCardTypes } from 'src/app/store/details/details.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public card$: Observable<Pokemon> = this.store.select(selectCardInfo);
  public cardImages$: Observable<any> = this.store.select(selectCardImages);
  public cardTypes$: Observable<any> = this.store.select(selectCardTypes);
  public cardAttacks$: Observable<any> = this.store.select(selectCardAttacks);

  constructor(private store: Store) { }
  
  ngOnInit(): void { }
  
  ngOnDestroy(): void {
    this.store.dispatch(clearStateCard());
  }
}
