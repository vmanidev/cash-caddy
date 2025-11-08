import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, CategoryPayload } from "../types";
import { DEFAULT_CATEGORIES } from "../../constants/categories";

const getInitialState = (): Category => {
    try {
        const localData = localStorage.getItem("categories");
        return localData ? JSON.parse(localData) : DEFAULT_CATEGORIES;
    }
    catch {
        return DEFAULT_CATEGORIES;
    }
}

const categorySlice = createSlice({
    name: "categories",
    initialState: getInitialState,
    reducers: {
        addCategory: (state, action: PayloadAction<CategoryPayload>) => {
            const payload = {
                key: `${action.payload.type}_${action.payload.name.key.replace(/[^A-Za-z0-9_]/g, "").toLowerCase()}`,  // create an unique key for each category
                value: action.payload.name.value.trim() // remove both leading and trailing whitespaces
            };

            const existingKeys = state[action.payload.type].map(({ key }) => key);

            if (existingKeys.includes(payload.key)) {
                payload.key = `${payload.key}_${state[action.payload.type].length}`; // To prevent category-key duplication
            }

            state[action.payload.type].push(payload);
        },
        editCategory: (state, action: PayloadAction<CategoryPayload>) => {
            state[action.payload.type].map((item) => {
                if (item.key === action.payload.name.key) item.value = action.payload.name.value;
                return item;
            });
            return state;
        },
        deleteCategory: (state, action: PayloadAction<CategoryPayload>) => {
            return {
                ...state,
                [action.payload.type]: state[action.payload.type].filter((item) => item.key !== action.payload.name.key)
            };
        }
    }
});

export const { addCategory, editCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;