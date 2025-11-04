import type { CategoryFormData } from "./form";

export interface UpdateCategoryStateProps {
    formData?: CategoryFormData,
    editMode: boolean,
    showModal: boolean
}

export interface DeleteCategoryModalProps {
    formData: CategoryFormData;
    showModal: boolean;
}