import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionSlice";
import categoriesReducer from "./features/categorySlice";
import themeReducer from "./features/themeSlice";
import budgetReducer from "./features/budgetSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        categories: categoriesReducer,
        theme: themeReducer,
        budgets: budgetReducer,
        user: userReducer
    }
});

export default store;