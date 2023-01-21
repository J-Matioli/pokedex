import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilteredCardsComponent } from './filtered-cards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilteredCardsResolver } from 'src/app/resolvers/filtered-cards.resolver';


const routes: Routes = [
  { path: '',
    children: [
      {
        path: ':id', 
        component: FilteredCardsComponent,
        resolve: { filteredCards: FilteredCardsResolver }
      },
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]  
}
];


@NgModule({
  declarations: [
    FilteredCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class FilteredCardsModule { }
