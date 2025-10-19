import { Button } from "@mui/material";
import Form from "../../components/ui/form/Form";
import AppModal from "../../components/ui/modal/Modal";
import { useState } from "react";
import { initialData } from "../../constants/form";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/features/transactionSlice";

interface Props {
  setAddTransactionForm: (arg: boolean) => void;
}

function AddTransaction({ setAddTransactionForm }: Props) {
  const [formData, setFormData] = useState(initialData);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setAddTransactionForm(false);
    dispatch(addTransaction(formData));
  };

  return (
    <AppModal
      title="Add New Transaction"
      content={<Form formData={formData} setFormData={setFormData} />}
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
