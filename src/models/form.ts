export interface TransactionFormData {
    id?: string
    date: string,
    amount: string,
    type: string,
    note: string,
    category: string
}

export interface CategoryFormData {
    type: string,
    name: {
        key: string,
        value: string
    }
}