import { useSelector } from "react-redux";
import type { TransactionFormData, TransactionType } from "../models/form";
import useCategoryMap from "./useCategoryMap";
import { useEffect, useMemo, useState } from "react";

interface TransactionsByCategory {
    type: string,
    categories: Record<string, { label: string, totalAmount: any, transactionCount: number }>;
}

function useTransactionsByCategory(transactionType: TransactionType) {
    const [transactionsByCategory, setTransactionsByCategory] = useState<TransactionsByCategory>({
        type: transactionType,
        categories: {}
    });

    const categoryMap = useCategoryMap();
    const transactions = useSelector((state: any) => state.transactions);

    const memoizedTransactionsByCategory = useMemo(() => {
        const transactionsByCategory: TransactionsByCategory = {
            type: transactionType,
            categories: {}
        }

        // Filter transactions by type and category, then map the results
        transactions.map(({ amount, category, type }: TransactionFormData) => {
            if (type === transactionType) {
                if (transactionsByCategory.categories?.[category]?.totalAmount.length > 0) {
                    transactionsByCategory.categories?.[category].totalAmount.push(amount);
                } else {
                    transactionsByCategory.categories[category] = {
                        ...transactionsByCategory.categories[category],
                        totalAmount: [amount],
                        label: categoryMap[category] ?? category
                    }
                }
                transactionsByCategory.categories[category]["transactionCount"] = transactionsByCategory.categories[category].totalAmount.length;
            }
        });

        // Sum all transaction amounts within each category
        Object.entries(transactionsByCategory.categories).forEach(([key, value]) => {
            transactionsByCategory.categories[key].totalAmount = value.totalAmount.reduce((acc: number, curr: string) => acc + parseInt(curr), 0);
        });

        return transactionsByCategory;
    }, [transactionType, transactions, categoryMap])

    useEffect(() => setTransactionsByCategory(memoizedTransactionsByCategory), [transactionType, transactions, categoryMap]);

    return transactionsByCategory;
}

export default useTransactionsByCategory;