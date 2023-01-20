import { createReducer, on } from "@ngrx/store";
import { Loader } from "src/app/models/loader";
import { setLoaderCardsReq, setLoaderMoreCardsReq, setLoaderParamsCardsReq } from "./loader.action";

export const initCards: Loader = {} as Loader;

export const loaderReducer = createReducer(
    initCards,
    on(setLoaderCardsReq, (state, { cardsReq }) => ({...state, cards: cardsReq})),
    on(setLoaderParamsCardsReq, (state, { paramsCardsReq }) => ({...state, paramsCards: paramsCardsReq})),
    on(setLoaderMoreCardsReq, (state, { moreCardsReq }) => ({...state, moreCardsReq: moreCardsReq})),
)