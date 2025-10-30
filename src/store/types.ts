export interface Transaction {
    id?: string
    date: string,
    amount: string,
    type: string,
    note: string,
    category: string
}

interface Item {
    text: string,
    value: string
}

export interface Category {
    income: Item[],
    expenses: Item[]
}

export interface CategoryPayload {
    type: "income" | "expenses",
    data: Item
}