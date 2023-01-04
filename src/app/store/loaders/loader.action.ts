import { createAction, props } from "@ngrx/store";

export const setLoaderCardsReq = createAction('[Cards Service] Set cards loader', props<{cardsReq: boolean}>());
export const setLoaderParamsCardsReq = createAction('[Cards Service] Set cards loader', props<{paramsCardsReq: boolean}>());