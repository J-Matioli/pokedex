import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Loader } from "src/app/models/loader";

export const selectInitialValue = createFeatureSelector<Loader>('loaders');

export const selectLoaders = createSelector(
    selectInitialValue,
    (loader) => loader
)

export const selectLoader = (key: string) => createSelector(
    selectLoaders,
    (loader: any) => loader[key]
)
