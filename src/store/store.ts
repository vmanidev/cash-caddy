import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionSlice";
import categoriesReducer from "./features/categorySlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        categories: categoriesReducer,
        theme: themeReducer
    }
});

export default store;