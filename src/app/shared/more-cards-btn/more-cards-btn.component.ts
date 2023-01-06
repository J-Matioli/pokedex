import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Filter } from 'src/app/models/filter';
import { loadParamsCards } from 'src/app/store/cards/cards.action';
import { selectFilter } from 'src/app/store/filters/filters.selector';

@Component({
  selector: 'app-more-cards-btn',
  templateUrl: './more-cards-btn.component.html',
  styleUrls: ['./more-cards-btn.component.scss']
})
export class MoreCardsBtnComponent implements OnInit {

  public filter$: Observable<Filter> = this.store.select(selectFilter)
  .pipe(
    tap(filter => this.filter = filter)
  );

  private filter: Filter;

  constructor(private store: Store) { }

  ngOnInit(): void { 
    this.filter$.subscribe()
  }

  getMore() {   
    const nextPage = this.filter.page + 1;

    this.store.dispatch(loadParamsCards({size: this.filter.maxPage, filter: this.filter.searchText, page: nextPage, actionType: 'moreCards'}));
  }
}
