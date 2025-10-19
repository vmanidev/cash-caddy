import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "../types";

const initialState: Transaction[] = [];

const transactionSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.push({ ...action.payload, id: `transactionId_${state.length}` });
        },
        removeTransaction: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item.id !== action.payload);
        },
        editTransaction: (state, action: PayloadAction<Transaction>) => {
            return state.map((item) => {
                if (item.id === action.payload.id) return action.payload;
                return item;
            });
        },
    },
});

export const { addTransaction, removeTransaction, editTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
