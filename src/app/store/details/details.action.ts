import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/models/pokemon";

export const loadCard = createAction('[Detail Resolver] Load card', props<{cardId: string}>());
export const loadedCard = createAction('[Detail Effects] Card loaded');
export const setStateCard = createAction('[Details Effects] Set state card', props<{card: Pokemon}>());
export const clearStateCard = createAction('[Details Component] Set state card');
