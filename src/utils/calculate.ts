import type { Transaction } from "../store/types";

export function calculateTransactions(inputArr: Transaction[]) {

    const totalIncome = () => calculateTotal("income");

    const totalExpenses = () => calculateTotal("expenses");

    const totalBalance = () => totalIncome() - totalExpenses();

    function calculateTotal(transactionType: string) {
        return inputArr.filter(({ type }) => type === transactionType).reduce((acc, { amount }) => acc + Number(amount), 0)
    }

    return { totalIncome, totalExpenses, totalBalance };
}
