import type { BudgetFormData, CategoryFormData, FormError, TransactionFormData } from "../models/form";

export const initialTransactionData: TransactionFormData = {
    date: "",
    amount: "",
    type: "expenses",
    note: "",
    category: "",
    payment_mode: "cash"
}

export const initialCategoryData: CategoryFormData = {
    type: "expenses",
    name: {
        key: "",
        value: ""
    }
}

export const initialBudgetData: BudgetFormData = {
    category: "",
    limit: ""
}

export const initialFormErrorState: FormError = {
    hasError: false,
    errorMessage: ""
}

export const HELPER_TEXT = {
    date: "Pick a date.",
    amount: "Enter the amount (numbers only).",
    category: "Select a category.",
    note: "Add a note for this transaction.",
    categoryName: "e.g. Salary, Bonus, Food, Groceries, etc."
}

export const FormFieldMap = {
    date: "Date",
    amount: "Amount",
    category: "Category",
    note: "Note",
    categoryName: "Category name"
}

export const PAYMENT_MODE_LABEL = {
    cash: "Cash",
    online: "UPI/Card/Netbanking"
}