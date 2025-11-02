export interface TransactionFormData {
    id?: string
    date: string,
    amount: string,
    type: "income" | "expenses",
    note: string,
    category: string
}

export interface CategoryFormData {
    type: "income" | "expenses",
    name: {
        key: string,
        value: string
    }
}

export interface FormError {
    hasError: boolean,
    errorMessage: string
}

export type TransactionType = "income" | "expenses";

export type FieldType = "date" | "amount" | "category" | "note" | "categoryName";