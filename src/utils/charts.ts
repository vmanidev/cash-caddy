interface ExpensePieChartData {
    type: string,
    categories: Record<string, { label: string, totalAmount: number, transactionCount: number }>
}

export const getExpensePieChartData = (transactionsByExpenseCategory: ExpensePieChartData) => {

    const expensePieData = Object.values(transactionsByExpenseCategory.categories)
        .map(({ label, totalAmount }, index) => {
            const obj = {
                id: index,
                value: totalAmount,
                label: label,
                color: getRandomColor(index)
            };

            return obj;
        });

    return expensePieData;
}

const getRandomColor = (index: number) => {
    const hue = (index * 137.508) % 360;
    const saturation = 60 + Math.random() * 20;
    const lightness = 50 + Math.random() * 10;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}