import { RootState } from "../../app/store";

export const getPokemons = (state: RootState)=> state.pokemons;

export const getPokemonDetail = (state:RootState) => state.pokemonDetail;