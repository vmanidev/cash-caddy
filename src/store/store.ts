import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionSlice";
import categoriesReducer from "./features/categorySlice";
import themeReducer from "./features/themeSlice";
import budgetReducer from "./features/budgetSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        categories: categoriesReducer,
        theme: themeReducer,
        budget: budgetReducer
    }
});

export default store;