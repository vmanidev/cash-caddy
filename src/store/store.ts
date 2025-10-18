import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer
    }
});

export default store;