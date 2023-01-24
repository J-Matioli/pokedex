import { createReducer, on } from "@ngrx/store";
import { Pokemon } from "src/app/models/pokemon";
import { clearStateCard, setStateCard } from "./details.action";

export const initCard: Pokemon = {} as Pokemon;

export const cardReducer = createReducer(
    initCard,
   
    on(setStateCard, (state, { card }) => ({...state, ...card})),
    on(clearStateCard, (state, _) => ({} as Pokemon)),    
)