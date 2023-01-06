import { createReducer, on } from "@ngrx/store";
import { Filter } from "src/app/models/filter";
import { clearFilter, setFilter } from "./filters.action";

export const initFilters: Filter = {} as Filter;

export const filterReducer = createReducer(
    initFilters,

    on(setFilter, (state, action) => ({...state, ...action.filter})),
    on(clearFilter, (state, action) => ({maxPage: 20, page: 1, searchText: ""}))
)