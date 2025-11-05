export interface ChartProps {
    id: number,
    value: number,
    label: string,
    color: string
}

export interface ChartStateProps {
    pie: {
        data: ChartProps[],
        pieCenterText: string
    }
}
