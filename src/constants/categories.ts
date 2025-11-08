import type { Category } from "../store/types";

export const DEFAULT_CATEGORIES: Category = {
    income: [
        { key: "salary", value: "Salary" },
        { key: "bonus", value: "Bonus" },
        { key: "cashback", value: "Cashback" },
        { key: "interest", value: "Interest" },
        { key: "others", value: "Others" }
    ],
    expenses: [
        { key: "food", value: "Food" },
        { key: "groceries", value: "Groceries" },
        { key: "health", value: "Health" },
        { key: "transport", value: "Transport" },
        { key: "education", value: "Education" }
    ]
}