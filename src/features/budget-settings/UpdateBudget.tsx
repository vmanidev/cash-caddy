import { Button } from "@mui/material";
import BudgetForm from "../../components/ui/form/BudgetForm";
import AppModal from "../../components/ui/modal/Modal";
import { useState } from "react";
import type { BudgetFormData } from "../../models/form";
import { initialBudgetData } from "../../constants/form";
import { useDispatch } from "react-redux";
import { modifyBudget } from "../../store/features/budgetSlice";
import type { UpdateBudgetStateProps } from "../../models/budgets";

interface Props {
  updateBudget: UpdateBudgetStateProps;
  setUpdateBudget: (prev: UpdateBudgetStateProps) => void;
}

function UpdateBudget({ updateBudget, setUpdateBudget }: Props) {
  const [formData, setFormData] = useState<BudgetFormData>(
    updateBudget.formData ? updateBudget.formData : initialBudgetData
  );

  const dispatch = useDispatch();

  const onCancel = () => {
    setFormData(initialBudgetData);
    setUpdateBudget({
      formData: initialBudgetData,
      editMode: false,
      showModal: false,
    });
  };

  const onSubmit = () => {
    dispatch(modifyBudget({ ...formData, limit: parseInt(formData.limit) }));
    setUpdateBudget({
      formData: initialBudgetData,
      editMode: false,
      showModal: false,
    });
  };

  return (
    <AppModal
      title={updateBudget.editMode ? "Modify Budget" : "Create Budget"}
      content={<BudgetForm formData={formData} setFormData={setFormData} />}
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            {updateBudget.editMode ? "Modify" : "Create"}
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    ></AppModal>
  );
}

export default UpdateBudget;
