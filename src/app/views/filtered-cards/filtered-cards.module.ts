import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilteredCardsComponent } from './filtered-cards.component';


const routes: Routes = [
  { path: '', component: FilteredCardsComponent }
];


@NgModule({
  declarations: [
    FilteredCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilteredCardsModule { }
