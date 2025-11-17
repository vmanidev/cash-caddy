import { useSelector } from "react-redux";
import type { PieChartProps } from "../../../models/charts";
import useCategoryMap from "../../../hooks/useCategoryMap";
import AppPieChart from "../../ui/charts/AppPieChart";

function BudgetPieChart() {
  const budget: Record<string, number> = useSelector(
    (store: any) => store.budget
  );
  const categoryMap = useCategoryMap();

  const chartData: PieChartProps[] = Object.entries(budget).map(
    ([key, value], index) => ({
      id: index,
      label: categoryMap[key],
      value: value,
    })
  );

  if (Object.keys(budget).length < 1) return null;

  return <AppPieChart data={chartData} pieCenterText="Budgets" />;
}

export default BudgetPieChart;
