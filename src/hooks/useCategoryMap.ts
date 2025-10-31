import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../store/types";

function useCategoryMap() {
    const [categoryMap, setCategoryMap] = useState<Record<string, string>>({});
    const categories = useSelector((state: any) => state.categories);

    useEffect(() => {
        const combinedCategoryList = [...categories.income, ...categories.expenses];

        setCategoryMap(
            combinedCategoryList
                .map((item: IncomeExpensesItem) => ({ [item.key]: item.value }))
                .reduce((acc, currentObj) => ({ ...acc, ...currentObj }), {})
        );
    }, [categories]);

    return categoryMap;
}

export default useCategoryMap;