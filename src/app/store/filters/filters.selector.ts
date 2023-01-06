import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Filter } from "src/app/models/filter";

export const selectFilterState = createFeatureSelector<Filter>('filters');

export const selectFilter = createSelector(
    selectFilterState,
    (filter) => filter
);