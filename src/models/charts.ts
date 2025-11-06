export interface ChartProps {
    id: number,
    value: number,
    label: string,
    color: string
}

interface PieChart {
    data: ChartProps[],
    pieCenterText: string
}

export interface ChartStateProps {
    overviewPie: PieChart
    expensePie: PieChart
}
