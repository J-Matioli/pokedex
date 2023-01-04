import { createReducer, on } from "@ngrx/store";

import { PokemonResponse } from "../../models/pokemons-response";
import { addStateCards, setStateCards } from "./cards.action";

export const initCards: PokemonResponse = {} as PokemonResponse;

export const cardsReducer = createReducer(
    initCards,

    on(setStateCards, (state, { cards }) => ({...state, ...cards})),
    on(addStateCards, (state, action) => ({...state, ...action.cards, data: [...state.data, ...action.cards.data]}))
)