import { useState } from "react";
import AppModal from "../../components/ui/modal/Modal";
import type { UpdateCategoryStateProps } from "../../models/categories";
import {
  initialCategoryData,
  initialFormErrorState,
} from "../../constants/form";
import CategoryForm from "../../components/ui/form/CategoryForm";
import { Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCategory, editCategory } from "../../store/features/categorySlice";
import type { FormError } from "../../models/form";
import { Info } from "@mui/icons-material";

interface Props {
  updateCategory: UpdateCategoryStateProps;
  setUpdateCategory: (props: UpdateCategoryStateProps) => void;
}

function UpdateCategory({ updateCategory, setUpdateCategory }: Props) {
  const [formData, setFormData] = useState(
    updateCategory.formData ? updateCategory.formData : initialCategoryData
  );

  const [formError, setFormError] = useState<FormError>(initialFormErrorState);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!isFormValid()) return;

    dispatch(
      updateCategory.editMode
        ? editCategory({
            ...formData,
            name: {
              ...formData.name,
              key: updateCategory.formData?.name.key ?? formData.name.value,
            },
          })
        : addCategory(formData)
    );
    setUpdateCategory({ formData, editMode: false, showModal: false });
  };

  const onCancel = () => {
    setUpdateCategory({
      formData: initialCategoryData,
      editMode: false,
      showModal: false,
    });
  };

  const isFormValid = () => {
    if (formData.name.value.trim().length < 1) {
      setFormError({ hasError: true, errorMessage: "Required Field." });
      return false;
    }
    setFormError(initialFormErrorState);
    return true;
  };

  return (
    <AppModal
      title={
        <Stack direction="row" gap={1} alignItems="center">
          <Info fontSize="small" color="info" />
          <span>
            {updateCategory.editMode ? "Edit Category" : "Add New Category"}
          </span>
        </Stack>
      }
      content={
        <CategoryForm
          editMode={updateCategory.editMode}
          formData={formData}
          setFormData={setFormData}
          formError={formError}
          setFormError={setFormError}
        />
      }
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            {updateCategory.editMode ? "Update" : "Add"}
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    />
  );
}

export default UpdateCategory;
