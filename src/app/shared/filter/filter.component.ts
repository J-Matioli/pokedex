import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { loadParamsCards } from 'src/app/store/cards/cards.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public searchForm: FormGroup;
  
  constructor(
    private store: Store,
    private fb: FormBuilder
  ) { }

  get filter(): AbstractControl | null {
    return this.searchForm.get('search')
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [""]
    })
  }

  search() {
    this.store.dispatch(loadParamsCards({size: 20, filter: this.filter?.value, actionType: 'filter', page: 1}));  
  }

}
