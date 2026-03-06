import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

type typeUsers = {
    users: User[],
    loading: boolean,
    error: boolean
};

const initialState: typeUsers = {
    users: [],
    loading: false,
    error: false
}

type actionState = PayloadAction<User[]>;

export const fetchUsers = createAsyncThunk(
    "users/fetchUser",
    async (query: string) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?name_like=${query}`
        );
        if (!response.ok) throw new Error("Error fetching users");
        return response.json();
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        emptyUsers: (state) => {
            state.users = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.error = false;
            state.loading = true;
        })
            .addCase(fetchUsers.fulfilled, (state, action: actionState) => {
                state.error = false;
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
    }
});
export const { emptyUsers } = userSlice.actions;
export default userSlice.reducer;