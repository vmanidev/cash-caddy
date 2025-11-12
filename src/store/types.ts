export interface TransactionPayload {
    id?: string
    date: string,
    amount: string,
    type: "income" | "expenses",
    note: string,
    category: string,
    payment_mode: "cash" | "online"
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