import type { Transaction } from "../store/types";

function formatDate(date: string) {

    const getLocaleDate = () => Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(new Date(date));

    return { getLocaleDate }
}

export const sortByDate = (transactions: Transaction[]) =>
    transactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export default formatDate;