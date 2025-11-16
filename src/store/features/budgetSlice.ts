import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BudgetPayload } from "../types";

const initialState: Record<string, number> = {};

const budgetSlice = createSlice({
    name: "budget",
    initialState: initialState,
    reducers: {
        createNewBudget: (state, action: PayloadAction<BudgetPayload>) => {
            state = { ...state, [action.payload.category]: action.payload.limit };
        },
        deleteBudget: (state, action: PayloadAction<BudgetPayload>) => {
            delete state[action.payload.category];
        },
        modifyBudget: (state, action: PayloadAction<BudgetPayload>) => {
            state[action.payload.category] = action.payload.limit;
        }
    }
});

export const { createNewBudget, deleteBudget, modifyBudget } = budgetSlice.actions;

export default budgetSlice.reducer;