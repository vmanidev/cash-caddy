import type { TransactionPayload } from "../store/types";

export function calculateTransactions(inputArr: TransactionPayload[] = []) {

    const totalIncome = () => calculateTotal("income");

    const totalExpenses = () => calculateTotal("expenses");

    const totalBalance = () => totalIncome() - totalExpenses();

    function calculateTotal(transactionType: string) {
        if (inputArr.length < 1) return 0;
        return inputArr.filter(({ type }) => type === transactionType).reduce((acc, { amount }) => acc + Number(amount), 0);
    }

    return { totalIncome, totalExpenses, totalBalance };
}
