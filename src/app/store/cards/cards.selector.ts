import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PokemonResponse } from "src/app/models/pokemons-response";

export const selectCardsState = createFeatureSelector<PokemonResponse>('cards');

export const selectCardsInfo = createSelector(
    selectCardsState,
    (cardsInfo) => cardsInfo
)

export const selectCards = createSelector(
    selectCardsState,
    (cardsInfo) => cardsInfo.data
)

export const hasCards = createSelector(
    selectCardsInfo,
    (cards) => cards.data?.length > 0
)

export const hasMoreCards = createSelector(
    selectCardsInfo,
    (cards) => cards.data?.length > 0 && cards.data?.length < cards.totalCount    
)