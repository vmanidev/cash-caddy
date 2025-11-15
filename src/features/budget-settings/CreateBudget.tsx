import { Button } from "@mui/material";
import BudgetForm from "../../components/ui/form/BudgetForm";
import AppModal from "../../components/ui/modal/Modal";

function CreateBudget() {
  return (
    <AppModal
      title="Create Budget"
      content={<BudgetForm />}
      actionButtons={
        <>
          <Button variant="contained" size="large">
            Create
          </Button>
          <Button variant="outlined">Cancel</Button>
        </>
      }
    ></AppModal>
  );
}

export default CreateBudget;
