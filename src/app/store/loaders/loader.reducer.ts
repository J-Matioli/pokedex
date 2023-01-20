import { createReducer, on } from "@ngrx/store";
import { Loader } from "src/app/models/loader";
import { setLoaderCardsReq, setLoaderMoreCardsReq } from "./loader.action";

export const initCards: Loader = {} as Loader;

export const loaderReducer = createReducer(
    initCards,
    on(setLoaderCardsReq, (state, { cardsReq }) => ({...state, cards: cardsReq})),
    on(setLoaderMoreCardsReq, (state, { moreCardsReq }) => ({...state, moreCardsReq: moreCardsReq})),
)