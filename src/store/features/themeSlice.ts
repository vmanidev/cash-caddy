import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: false,
    reducers: {
        darkMode: (state: any, action: PayloadAction<boolean>) => {
            state = action.payload;
            return state;
        }
    }
})

export const { darkMode } = themeSlice.actions;

export default themeSlice.reducer;