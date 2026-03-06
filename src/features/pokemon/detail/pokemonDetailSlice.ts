import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonDetail } from "../../../types";

export const fetchPokemonDetail = createAsyncThunk("pokemon/fetchPokemonDetail",
    async (id: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error("Error getting pokemon list");
        
        return await response.json();
    }
)

type initialStateProps = {
    pokemon: PokemonDetail | null;
    loading: boolean,
    error: boolean,
}

const initialState: initialStateProps = {
    pokemon: null,
    loading: false,
    error: false,
}

const pokemonDetailSlice = createSlice({
    name: 'pokemonDetail',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
            state.pokemon = action.payload;
            state.error = false;
            state.loading = false;
        }).addCase(fetchPokemonDetail.pending, (state, action) => {
            state.error = false;
            state.loading = true;
        }).addCase(fetchPokemonDetail.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        })
              

    },
})

export default pokemonDetailSlice.reducer; 
