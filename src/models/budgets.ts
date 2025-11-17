import type { BudgetFormData } from "./form";

export interface UpdateBudgetStateProps {
    formData?: BudgetFormData;
    editMode: boolean,
    showModal: boolean;
}