import { initialFormErrorState } from "../constants/form";
import type { FormError } from "../models/form";

export const validateForm = (formData: any) => {
    const formError: Record<string, FormError> = {};

    Object.entries(formData).forEach(([field, value]) => {
        if (!value) {
            formError[field] = {
                hasError: true,
                errorMessage: `This field is required.`
            }
        }
    });

    return formError;
}

export const validateField = ({ field, value }: { field: string, value: any }) => {
    let fieldError: FormError = initialFormErrorState;

    if (value.trim().length < 1) {
        fieldError = { hasError: true, errorMessage: `${field} is required` };
    }

    if (field === "amount" && isNaN(parseInt(value))) {
        fieldError = { hasError: true, errorMessage: "Only numeric values are allowed." };
    }

    return fieldError;
}