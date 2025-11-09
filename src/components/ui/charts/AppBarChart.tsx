import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import type { BarChartProps } from "../../../models/charts";

interface Props {
  chartData: BarChartProps[];
  xAxisData: any[];
  yAxisData: any[];
}

function AppBarChart({ chartData, xAxisData, yAxisData }: Props) {
  const [series, setSeries] = useState<BarChartProps[]>([]);

  useEffect(() => {
    setSeries(chartData);
  }, [chartData]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BarChart series={series} xAxis={xAxisData} yAxis={yAxisData} />
    </Box>
  );
}

export default AppBarChart;
