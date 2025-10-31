export interface Transaction {
    id?: string
    date: string,
    amount: string,
    type: string,
    note: string,
    category: string
}

export interface IncomeExpensesItem {
    key: string,
    value: string
}

export interface Category {
    income: IncomeExpensesItem[],
    expenses: IncomeExpensesItem[]
}

export interface CategoryPayload {
    type: "income" | "expenses",
    name: IncomeExpensesItem
}