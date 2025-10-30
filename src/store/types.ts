export interface Transaction {
    id?: string
    date: string,
    amount: string,
    type: string,
    note: string,
    category: string
}

export interface Category {
    income: string[],
    expenses: string[]
}