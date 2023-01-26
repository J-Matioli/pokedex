import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Pokemon } from "src/app/models/pokemon";

export const selectCardsState = createFeatureSelector<Pokemon>('card');

export const selectCardInfo = createSelector(
    selectCardsState,
    (cardInfo) => cardInfo
)

export const selectCardImages = createSelector(
    selectCardInfo,
    (cardInfo) => cardInfo.images
)

export const selectCardTypes = createSelector(
    selectCardInfo,
    (cardInfo) => cardInfo.types
)

export const selectCardAttacks = createSelector(
    selectCardInfo,
    (cardInfo) => cardInfo.attacks
)