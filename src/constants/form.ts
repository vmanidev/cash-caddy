import type { CategoryFormData, FormError, TransactionFormData } from "../models/form"
import type { Category } from "../store/types"

export const initialTransactionData: TransactionFormData = {
    date: "",
    amount: "",
    type: "expenses",
    note: "",
    category: ""
}

export const initialCategoryData: CategoryFormData = {
    type: "expenses",
    name: {
        key: "",
        value: ""
    }
}

export const initialFormErrorState: FormError = {
    hasError: false,
    errorMessage: ""
}

export const DEFAULT_CATEGORIES: Category = {
    income: [
        { key: "salary", value: "💼 Salary" },
        { key: "bonus", value: "🎁 Bonus" },
        { key: "cashback", value: "💳 Cashback" },
        { key: "interest", value: "🏦 Interest" },
        { key: "others", value: "💰 Others" }
    ],
    expenses: [
        { key: "food", value: "🍔 Food" },
        { key: "groceries", value: "🛒 Groceries" },
        { key: "health", value: "🏥 Health" },
        { key: "transport", value: "🚗 Transport" },
        { key: "education", value: "🎓 Education" }
    ]
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