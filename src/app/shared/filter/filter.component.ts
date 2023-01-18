import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public searchForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
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
    this.router.navigate(['cards', this.filter?.value])
  }

}
