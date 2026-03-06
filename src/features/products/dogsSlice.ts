import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

type typeSlice = {
    dogs: User[]
}

const initialState: typeSlice = {
    dogs: []
}

const productSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        addDog: (state, action) => {
            state.dogs.push(action.payload);
        }
    }
})

export const { addDog } = productSlice.actions;
export default productSlice.reducer;