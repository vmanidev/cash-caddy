import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionSlice";
import categoriesReducer from "./features/categorySlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        categories: categoriesReducer
    }
});

export default store;