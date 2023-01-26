import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cardsReducer } from './store/cards/cards.reducer';
import { loaderReducer } from './store/loaders/loader.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CardsEffects } from './store/cards/cards.effects';
import { filterReducer } from './store/filters/filters.reducer';
import { FilterEffects } from './store/filters/filters.effects';
import { cardReducer } from './store/details/details.reducer';
import { CardEffects } from './store/details/details.effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({ cards: cardsReducer, loaders: loaderReducer, filters: filterReducer, card: cardReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CardsEffects, FilterEffects, CardEffects])
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
