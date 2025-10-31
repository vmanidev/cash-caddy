import type { CategoryFormData, TransactionFormData } from "../models/form"

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