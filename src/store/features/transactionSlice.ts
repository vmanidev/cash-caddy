import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Transaction } from "../types";

const initialState: Transaction[] = [];

const transactionSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<Transaction>) => {
            state.push({ ...action.payload, id: `transactionId_${state.length}` });
        },
        remove: (state, action: PayloadAction<Transaction>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        edit: (state, action: PayloadAction<Transaction>) => {
            return state.map((item) => {
                if (item.id === action.payload.id) return action.payload;
                return item;
            });
        },
    },
});

export const { add, remove, edit } = transactionSlice.actions;

export default transactionSlice.reducer;
