import type { CategoryFormData } from "./form";

export interface UpdateCategoryStateProps {
    formData?: CategoryFormData,
    editMode: boolean,
    showModal: boolean
}