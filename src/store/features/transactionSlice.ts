import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TransactionPayload } from "../types";

const getInitialState = (): TransactionPayload[] => {
    try {
        const localData = localStorage.getItem("transactions");
        return localData ? JSON.parse(localData) : []
    }
    catch {
        return [];
    }
}

const transactionSlice = createSlice({
    name: "transactions",
    initialState: getInitialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<TransactionPayload>) => {
            state.push({ ...action.payload, id: `transactionId_${state.length}` });
        },
        removeTransaction: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item.id !== action.payload);
        },
        editTransaction: (state, action: PayloadAction<TransactionPayload>) => {
            return state.map((item) => {
                if (item.id === action.payload.id) return action.payload;
                return item;
            });
        }
    },
});

export const { addTransaction, removeTransaction, editTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
