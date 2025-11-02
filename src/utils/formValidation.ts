import { FormFieldMap, initialFormErrorState } from "../constants/form";
import type { FieldType, FormError } from "../models/form";

export const validateForm = (formData: any) => {
    const formError: Record<string, FormError> = {};

    Object.entries(formData).forEach(([field, value]) => {
        if (!value || (typeof value === "string" && value.trim().length < 1)) {
            formError[field] = {
                hasError: true,
                errorMessage: `This field is required.`
            }
        }
    });

    if (!/^\d+$/.test(formData?.amount)) {
        formError['amount'] = { hasError: true, errorMessage: "Only numeric values are allowed." };
    }

    return formError;
}

export const validateField = ({ field, value }: { field: FieldType, value: any }) => {
    let fieldError: FormError = initialFormErrorState;

    if (!value || (typeof value === "string" && value.trim().length < 1)) {
        fieldError = { hasError: true, errorMessage: `${FormFieldMap[field]} is required` };
    }

    if (field === "amount" && !/^\d+$/.test(value)) {
        fieldError = { hasError: true, errorMessage: "Only numeric values are allowed." };
    }

    return fieldError;
}