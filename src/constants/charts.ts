import { grey, pink, teal } from "@mui/material/colors";
import type { ChartProps } from "../models/charts";

export const overviewPieChartData: ChartProps[] = [
    { id: 0, value: 0, label: "Income", color: teal[500] },
    { id: 1, value: 0, label: "Expenses", color: pink[500] },
    { id: 2, value: 0, label: "Balance", color: grey[500] },
]