import { Pokemon } from "./pokemon";

export interface PokemonResponse {
    count: number;
    data: Pokemon[];
    page: number;
    pageSize: number;
    totalCount: number;
}