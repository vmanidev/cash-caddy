import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, CategoryPayload } from "../types";

const initialState: Category = {
    income: [],
    expenses: []
}

const categorySlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].push(action.payload.data);
        },
        editCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].map((item) => {
                if (item.value === action.payload.data.value) item = action.payload.data;
                return item;
            });
            return state;
        },
        deleteCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].filter((item) => item.value !== action.payload.data.value);
            return state;
        }
    }
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;