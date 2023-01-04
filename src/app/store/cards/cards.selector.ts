import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PokemonResponse } from "src/app/models/pokemons-response";

export const selectCardsState = createFeatureSelector<PokemonResponse>('cards');

export const selectCardsInfo = createSelector(
    selectCardsState,
    (cardsInfo) => cardsInfo
)

export const hasCards = createSelector(
    selectCardsInfo,
    (cards) => cards.data?.length > 0 && cards.data?.length < cards.totalCount    
)