export interface Transaction {
    id?: string
    date: string,
    amount: string,
    type: string,
    note: string,
    category: string
}

export interface IncomeExpensesItem {
    text: string,
    value: string
}

export interface Category {
    income: IncomeExpensesItem[],
    expenses: IncomeExpensesItem[]
}

export interface CategoryPayload {
    type: "income" | "expenses",
    data: IncomeExpensesItem
}