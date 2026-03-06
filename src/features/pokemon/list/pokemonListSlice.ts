import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pokemonListType } from "../../../types";
type pokemonType = {
    pokemons: pokemonListType[],
    loading: boolean,
    error: boolean
}

const initialState: pokemonType = {
    pokemons: [],
    loading: false,
    error: false
}

export const fetchPokemonList = createAsyncThunk("pokemon/fetchPokemons",
    async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) throw new Error("Error getting pokemon list");
        const data = await response.json();

        return data.results;
    }
)

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers(builder) {
        //Get pokemons
        builder.addCase(fetchPokemonList.pending, (state) => {
            state.error = false;
            state.loading = true;
        })
            .addCase(fetchPokemonList.fulfilled, (state, action) => {
                state.error = false;
                state.loading = false;
                state.pokemons = action.payload;
            }).addCase(fetchPokemonList.rejected, (state) => {
                state.error = true;
                state.loading = false;
                state.pokemons = [];
            })
    },

})
export default pokemonSlice.reducer;