import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, CategoryPayload } from "../types";

const getInitialState = (): Category => {
    try {
        const localData = localStorage.getItem("categories");
        return localData ? JSON.parse(localData) : { income: [], expenses: [] }
    }
    catch {
        return { income: [], expenses: [] };
    }
}

const categorySlice = createSlice({
    name: "categories",
    initialState: getInitialState,
    reducers: {
        addCategory: (state, action: PayloadAction<CategoryPayload>) => {
            const payload = {
                key: action.payload.name.key.replace(/[^A-Za-z0-9_]/g, "").toLowerCase(),  // create an unique key for each category
                value: action.payload.name.value.trim() // remove both leading and trailing whitespaces
            };
            state[action.payload.type].push(payload);
        },
        editCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].map((item) => {
                if (item.key === action.payload.name.key) item = action.payload.name;
                return item;
            });
            return state;
        },
        deleteCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].filter((item) => item.key !== action.payload.name.key);
            return state;
        }
    }
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;