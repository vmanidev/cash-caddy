import type { TransactionTableColumn } from "../models/table";

export const transactionTableColumn: TransactionTableColumn[] = [
    {
        id: "date",
        label: "Date",
    },
    {
        id: "note",
        label: "Note",
    },
    {
        id: "category",
        label: "Category",
    },
    {
        id: "amount",
        label: "Amount",
    },
];