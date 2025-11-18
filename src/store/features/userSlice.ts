import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserPayload } from "../types";

const getInitialState = (): UserPayload => {
    try {
        const userLocalData = localStorage.getItem("user");
        return userLocalData ? JSON.parse(userLocalData) : { newUser: true };
    } catch {
        return { newUser: true };
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: getInitialState,
    reducers: {
        onboardUser: (state, action: PayloadAction<boolean>) => {
            state.newUser = !action.payload;
            localStorage.setItem("user", JSON.stringify(state));
        }
    }
});

export const { onboardUser } = userSlice.actions;

export default userSlice.reducer;