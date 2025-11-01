import type { CategoryFormData, TransactionFormData } from "../models/form"
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