import { createAction, props } from "@ngrx/store";
import { PokemonResponse } from "src/app/models/pokemons-response";

export const loadAllCards = createAction('[Home Component] Load cards');
export const loadParamsCards = createAction('[Cards Resolver] Load filtered cards', props<{size: number, filter: string, page: number}>());
export const loadMoreCards = createAction('[More Cards Component] Load filtered cards', props<{size: number, filter: string, page: number}>());

export const loadedCards = createAction('[Cards Effects] Cards loaded');
export const setStateCards = createAction('[Cards Effects] Set state cards', props<{cards: PokemonResponse}>());
export const addStateCards = createAction('[Cards Effects] Add state cards', props<{cards: PokemonResponse}>());