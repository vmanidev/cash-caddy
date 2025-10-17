import { Button } from "@mui/material";
import Form from "../../components/ui/form/Form";
import AppModal from "../../components/ui/modal/Modal";

function EditTransaction() {
  //mock data
  const form = {
    date: "2024-11-22",
    amount: "4500",
    category: "Shopping",
    type: "income",
    note: "Did shopping at Reliance mall",
  };

  return (
    <AppModal
      title="Edit Transaction"
      content={<Form mode="edit" inputFormData={form} />}
      actionButtons={
        <>
          <Button variant="contained">Done</Button>
          <Button variant="text">Cancel</Button>
        </>
      }
    />
  );
}

export default EditTransaction;
