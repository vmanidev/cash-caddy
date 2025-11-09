export interface PieChartProps {
    id: number,
    value: number,
    label: string,
    color: string
}

export interface BarChartProps {
    id: number,
    label: string,
    data: number[]
}

interface PieChart {
    data: PieChartProps[],
    pieCenterText: string
}

export interface ChartStateProps {
    overviewPie: PieChart
}
