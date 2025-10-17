import { Button } from "@mui/material";
import Form from "../../components/ui/form/Form";
import AppModal from "../../components/ui/modal/Modal";

interface Props {
  setAddTransactionForm: (arg: boolean) => void;
}

function AddTransaction({ setAddTransactionForm }: Props) {
  const onSubmit = () => {
    setAddTransactionForm(false);
  };

  return (
    <AppModal
      title="Add New Transaction"
      content={<Form mode="add" />}
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            Add
          </Button>
          <Button variant="text" onClick={() => setAddTransactionForm(false)}>
            Cancel
          </Button>
        </>
      }
    ></AppModal>
  );
}

export default AddTransaction;
