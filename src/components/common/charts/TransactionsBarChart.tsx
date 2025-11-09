import { useSelector } from "react-redux";
import type { BarChartProps } from "../../../models/charts";
import AppBarChart from "../../ui/charts/AppBarChart";
import type { TransactionFormData } from "../../../models/form";
import { useMemo } from "react";

function TransactionsBarCharts() {
  const transactions = useSelector((state: any) => state.transactions);

  const NUM_OF_INCOME_TRANSACTIONS: TransactionFormData[] = useMemo(
    () =>
      transactions.filter(({ type }: TransactionFormData) => type === "income"),
    [transactions]
  );

  const NUM_OF_EXPENSE_TRANSACTIONS: TransactionFormData[] = useMemo(
    () =>
      transactions.filter(
        ({ type }: TransactionFormData) => type === "expenses"
      ),
    [transactions]
  );

  const chartData: BarChartProps[] = [
    { id: 1, label: "Income", data: [NUM_OF_INCOME_TRANSACTIONS.length] },
    { id: 2, label: "Expenses", data: [NUM_OF_EXPENSE_TRANSACTIONS.length] },
  ];

  const xAxisData = [{ data: ["Transactions"] }];

  const yAxisData = [{ width: 100 }];

  return (
    <AppBarChart
      chartData={chartData}
      xAxisData={xAxisData}
      yAxisData={yAxisData}
    />
  );
}

export default TransactionsBarCharts;
