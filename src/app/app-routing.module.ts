import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsResolver } from './resolvers/details.resolver';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'cards',
    loadChildren: () => import('./views/filtered-cards/filtered-cards.module').then(m => m.FilteredCardsModule)},
  { 
    path: 'detalhes/:id',
    resolve: {pokemon: DetailsResolver },
    loadChildren: () => import('./views/details/details.module').then(m => m.DetailsModule)},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
