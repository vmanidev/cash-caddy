import type { TransactionSummaryCard } from "../models/overview";

export const transactionSummaryCard: TransactionSummaryCard[] = [
    {
        type: "income",
        displayText: "Total Income"
    },
    {
        type: "expenses",
        displayText: "Total Expenses"
    },
    {
        type: "balance",
        displayText: "Total Balance"
    }
];