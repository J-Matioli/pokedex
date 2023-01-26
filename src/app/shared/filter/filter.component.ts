import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, noop, Observable, tap } from 'rxjs';
import { loadAutocomplete } from 'src/app/store/filters/filters.action';
import { selectAutocomplete } from 'src/app/store/filters/filters.selector';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public searchForm: FormGroup;
  public pokemons: string[] = [];
  public cards$: Observable<string[]> = this.store.select(selectAutocomplete).pipe(tap(data => this.pokemons = data))

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) { }

  get filter(): AbstractControl | null {
    return this.searchForm.get('search')
  }

  ngOnInit(): void {
    this.cards$.subscribe(noop)
    this.searchForm = this.fb.group({
      search: [""]
    })

    this.filter?.valueChanges
    .pipe(
      debounceTime(500),
    ).subscribe(data => {      
      this.store.dispatch(loadAutocomplete({name: data}))
    })
  }

  search() {
    this.router.navigate(['cards', this.filter?.value])
  }

}
