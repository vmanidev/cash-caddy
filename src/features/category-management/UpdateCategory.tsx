import { useState } from "react";
import AppModal from "../../components/ui/modal/Modal";
import type { UpdateCategoryStateProps } from "../../models/categories";
import {
  initialCategoryData,
  initialFormErrorState,
} from "../../constants/form";
import CategoryForm from "../../components/ui/form/CategoryForm";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCategory, editCategory } from "../../store/features/categorySlice";
import type { FormError } from "../../models/form";

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
    if (formError.hasError) return;

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

  return (
    <AppModal
      title={updateCategory.editMode ? "Edit Category" : "Add New Category"}
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
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    />
  );
}

export default UpdateCategory;
