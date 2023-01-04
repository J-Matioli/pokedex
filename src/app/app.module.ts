import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { cardsReducer } from './store/cards/cards.reducer';
import { loaderReducer } from './store/loaders/loader.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CardEffects } from './store/cards/cards.effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({ cards: cardsReducer, loaders: loaderReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([CardEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
