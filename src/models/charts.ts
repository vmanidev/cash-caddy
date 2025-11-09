export interface PieChartProps {
    id: number,
    value: number,
    label: string,
    color: string
}

interface PieChart {
    data: PieChartProps[],
    pieCenterText: string
}

export interface ChartStateProps {
    overviewPie: PieChart
}
