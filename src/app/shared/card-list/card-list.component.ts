import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { selectCards } from 'src/app/store/cards/cards.selector';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cards$: Observable<Pokemon[]> = this.store.select(selectCards)

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
