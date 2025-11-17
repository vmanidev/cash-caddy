import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BudgetPayload } from "../types";

const getInitialState = (): Record<string, number> => {
    try {
        const localData = localStorage.getItem("budgets");
        return localData ? JSON.parse(localData) : {}
    }
    catch {
        return {};
    }
};

const budgetSlice = createSlice({
    name: "budgets",
    initialState: getInitialState,
    reducers: {
        modifyBudget: (state, action: PayloadAction<BudgetPayload>) => {
            state[action.payload.category] = action.payload.limit;
        },
        deleteBudget: (state, action: PayloadAction<BudgetPayload>) => {
            delete state[action.payload.category];
        }
    }
});

export const { modifyBudget, deleteBudget } = budgetSlice.actions;

export default budgetSlice.reducer;