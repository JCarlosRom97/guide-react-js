import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../features/users/userSlice';
import productReducer from "../features/products/dogsSlice";
import pokemonsReducer from "../features/pokemon/list/pokemonListSlice";
import pokemonDetailReducer from "../features/pokemon/detail/pokemonDetailSlice";

export const store = configureStore({
    reducer:{
        users: userReducer,
        products: productReducer,
        pokemons: pokemonsReducer,
        pokemonDetail: pokemonDetailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;