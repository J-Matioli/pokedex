import { createAction, props } from "@ngrx/store";
import { Filter } from "src/app/models/filter";

export const setFilter = createAction('[Filter Effects] Set new filters', props<{filter: Filter}>())
export const clearFilter = createAction('[Home Component] Clear filters')