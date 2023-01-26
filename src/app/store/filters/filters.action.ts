import { createAction, props } from "@ngrx/store";
import { Filter } from "src/app/models/filter";

export const setFilter = createAction('[Filter Effects] Set new filters', props<{filter: Filter}>())
export const clearFilter = createAction('[Home Component] Clear filters')

export const loadAutocomplete = createAction('[Filter Component] Load autocomplete Items', props<{name: string}>())
export const setAutocomplete = createAction('[Filter Effects] Set autocomplete Items', props<{data: string[]}>())