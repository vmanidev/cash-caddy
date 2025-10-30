import { Button } from "@mui/material";
import TransactionForm from "../../ui/form/TransactionForm";
import AppModal from "../../ui/modal/Modal";
import { useState } from "react";
import { initialData } from "../../../constants/form";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  editTransaction,
} from "../../../store/features/transactionSlice";
import type { UpdateTransactionStateProps } from "../../../models/transactions";

interface Props {
  updateTransaction: UpdateTransactionStateProps;
  setUpdateTransaction: (prev: UpdateTransactionStateProps) => void;
}

function UpdateTransaction({ updateTransaction, setUpdateTransaction }: Props) {
  const [formData, setFormData] = useState(
    updateTransaction.formData ? updateTransaction.formData : initialData
  );
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      updateTransaction.formData
        ? editTransaction(formData)
        : addTransaction(formData)
    );
    setUpdateTransaction({ showModal: false });
  };

  const onCancel = () => {
    setUpdateTransaction({ showModal: false });
  };

  return (
    <AppModal
      title={
        updateTransaction.formData ? "Edit Transaction" : "Add New Transaction"
      }
      content={<TransactionForm formData={formData} setFormData={setFormData} />}
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            {updateTransaction.formData ? "Update" : "Add"}
          </Button>
          <Button variant="text" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    ></AppModal>
  );
}

export default UpdateTransaction;
