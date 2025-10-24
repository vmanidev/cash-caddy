import type { Transaction } from "../store/types";

function formatDate(date: string) {

    const getLocaleDate = () => Intl.DateTimeFormat("en-us", { dateStyle: "medium" }).format(new Date(date));

    const isToday = () => {
        const today = new Date();
        if (today.getDate() === new Date(date).getDate()) return true;
        return false;
    }

    const isYesterday = () => {
        const today = new Date();
        if (today.getDate() - 1 === new Date(date).getDate()) return true;
        return false;
    }

    const getRelativeDateLabel = () => {
        if (isToday()) return "Today";
        else if (isYesterday()) return "Yesterday";
        else return getLocaleDate();
    }

    return { getLocaleDate, getRelativeDateLabel, isToday, isYesterday };
}

export const sortByDate = (transactions: Transaction[], order: "ascending" | "descending" = "descending") =>
    transactions.sort((a, b) =>
        order === "ascending" ?
            (new Date(a.date).getTime() - new Date(b.date).getTime()) :
            (new Date(b.date).getTime() - new Date(a.date).getTime()));

export default formatDate;