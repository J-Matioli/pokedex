import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredCardsComponent } from './filtered-cards/filtered-cards.component';
import { RouterModule, Routes } from '@angular/router';


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
