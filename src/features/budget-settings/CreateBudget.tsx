import { Button } from "@mui/material";
import BudgetForm from "../../components/ui/form/BudgetForm";
import AppModal from "../../components/ui/modal/Modal";
import { useState } from "react";
import type { BudgetFormData } from "../../models/form";
import { initialBudgetData } from "../../constants/form";
import { useDispatch } from "react-redux";
import { updateBudget } from "../../store/features/budgetSlice";

interface Props {
  setCreateBudgetModal: (props: boolean) => void;
}

function CreateBudget({ setCreateBudgetModal }: Props) {
  const [formData, setFormData] = useState<BudgetFormData>(initialBudgetData);

  const dispatch = useDispatch();

  const onCancel = () => {
    setFormData(initialBudgetData);
    setCreateBudgetModal(false);
  };

  const createBudget = () => {
    dispatch(updateBudget({ ...formData, limit: parseInt(formData.limit) }));
    setCreateBudgetModal(false);
  };

  return (
    <AppModal
      title="Create Budget"
      content={<BudgetForm formData={formData} setFormData={setFormData} />}
      actionButtons={
        <>
          <Button variant="contained" onClick={createBudget}>
            Create
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    ></AppModal>
  );
}

export default CreateBudget;
