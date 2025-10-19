import type { Dayjs } from "dayjs";

export interface FormData {
    date: Dayjs | null,
    amount: string,
    type: string,
    note: string,
    category: string
}