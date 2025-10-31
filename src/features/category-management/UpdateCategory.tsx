import { useState } from "react";
import AppModal from "../../components/ui/modal/Modal";
import type { UpdateCategoryStateProps } from "../../models/categories";
import { initialCategoryData } from "../../constants/form";
import CategoryForm from "../../components/ui/form/CategoryForm";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCategory, editCategory } from "../../store/features/categorySlice";

interface Props {
  updateCategory: UpdateCategoryStateProps;
  setUpdateCategory: (props: UpdateCategoryStateProps) => void;
}

function UpdateCategory({ updateCategory, setUpdateCategory }: Props) {
  const [formData, setFormData] = useState(
    updateCategory.formData ? updateCategory.formData : initialCategoryData
  );

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      updateCategory.formData?.name.key !== ""
        ? editCategory(formData)
        : addCategory(formData)
    );
    setUpdateCategory({ formData, showModal: false });
  };

  const onCancel = () => {
    setUpdateCategory({ formData: initialCategoryData, showModal: false });
  };

  return (
    <AppModal
      title={
        updateCategory.formData?.name.key !== ""
          ? "Edit Category"
          : "Add New Category"
      }
      content={<CategoryForm formData={formData} setFormData={setFormData} />}
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            {updateCategory.formData?.name.key !== "" ? "Update" : "Add"}
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
