import { useEffect, useState } from "react";
import { type ChartProps } from "../../models/charts";
import AppPieChart from "../ui/charts/AppPieChart";
import useTransactionsByCategory from "../../hooks/useTransactionsByCategory";
import { getExpensePieChartData } from "../../utils/charts";

function ExpensePieChart() {
  const [chartData, setChartData] = useState<ChartProps[]>([]);
  const transactionsByExpenseCategory = useTransactionsByCategory("expenses");

  useEffect(() => {
    const expensePieChartData = getExpensePieChartData(
      transactionsByExpenseCategory
    );

    setChartData(expensePieChartData);
  }, [transactionsByExpenseCategory]);

  return (
    chartData.length > 0 && (
      <AppPieChart data={chartData} pieCenterText="Expenses" />
    )
  );
}

export default ExpensePieChart;
