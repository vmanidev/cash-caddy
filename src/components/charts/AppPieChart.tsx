import { Box, styled, type Theme } from "@mui/material";
import { PieChart, useDrawingArea } from "@mui/x-charts";
import { useEffect, useState, type ReactElement, type ReactNode } from "react";
import type { ChartProps } from "../../models/charts";

const StyledText = styled("text")(({ theme }: { theme: Theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 16,
}));

interface PieCenterLabelProps {
  children: ReactNode;
}

function PieCenterLabel({ children }: PieCenterLabelProps): ReactElement {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

interface Props {
  data: ChartProps[];
  pieCenterText: string;
}

function AppPieChart({ data, pieCenterText }: Props) {
  const [chartData, setChartData] = useState<ChartProps[]>([]);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <Box>
      <PieChart
        series={[
          {
            data: [...chartData],
            innerRadius: 40,
            outerRadius: 100,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -45,
          },
        ]}
        width={200}
        height={200}
      >
        <PieCenterLabel>{pieCenterText}</PieCenterLabel>
      </PieChart>
    </Box>
  );
}

export default AppPieChart;
