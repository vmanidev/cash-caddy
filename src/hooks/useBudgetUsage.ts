import { useSelector } from "react-redux";
import useTransactionsByCategory from "./useTransactionsByCategory";
import { useEffect, useState } from "react";

function useBudgetUsage() {
    const [budgetusage, setBudgetUsage] = useState<Record<string, number>>({});

    const budgets = useSelector((state: any) => state.budgets)
    const { categories } = useTransactionsByCategory("expenses");

    useEffect(() => {
        setBudgetUsage(() => {
            const usageData: Record<string, number> = {};
            Object.keys(budgets).forEach((key) => {
                if (categories[key] !== undefined) {
                    usageData[key] = categories[key].totalAmount;
                }
            });
            return usageData;
        })
    }, [budgets, categories]);

    return budgetusage;
}

export default useBudgetUsage;