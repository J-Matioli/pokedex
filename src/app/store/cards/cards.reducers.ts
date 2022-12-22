import { createReducer } from "@ngrx/store";
import { PokemonResponse } from "../../models/pokemons-response";

export const initCards: PokemonResponse = {} as PokemonResponse;

export const cardsReducer = createReducer(
    initCards
)