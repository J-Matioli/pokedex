import { createReducer } from "@ngrx/store";
import { Loader } from "src/app/models/loader";

export const initCards: Loader = {} as Loader;

export const loaderReducer = createReducer(
    initCards
)