import { createReducer, on } from "@ngrx/store";
import { Filter } from "src/app/models/filter";
import { clearFilter, setAutocomplete, setFilter } from "./filters.action";

export const initFilters: Filter = {page: 1} as Filter;

export const filterReducer = createReducer(
    initFilters,

    on(setFilter, (state, action) => ({...state, ...action.filter})),
    on(clearFilter, (state, action) => ({maxPage: 20, page: 1, searchText: "", autoComplete: []})),
    
    on(setAutocomplete, (state, action) => {
        const names: string[] = [...new Set(action.data.map((el: any) => el.name))]                           
        return {...state, autoComplete: names}
    }),
)