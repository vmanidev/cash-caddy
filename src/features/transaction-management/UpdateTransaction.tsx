import { Button } from "@mui/material";
import TransactionForm from "../../components/ui/form/TransactionForm";
import AppModal from "../../components/ui/modal/Modal";
import { useState } from "react";
import { initialTransactionData } from "../../constants/form";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  editTransaction,
} from "../../store/features/transactionSlice";
import type { UpdateTransactionStateProps } from "../../models/transactions";

interface Props {
  updateTransaction: UpdateTransactionStateProps;
  setUpdateTransaction: (prev: UpdateTransactionStateProps) => void;
}

function UpdateTransaction({ updateTransaction, setUpdateTransaction }: Props) {
  const [formData, setFormData] = useState(
    updateTransaction.formData
      ? updateTransaction.formData
      : initialTransactionData
  );
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      updateTransaction.formData
        ? editTransaction(formData)
        : addTransaction(formData)
    );
    setUpdateTransaction({ formData, showModal: false });
  };

  const onCancel = () => {
    setUpdateTransaction({
      formData: initialTransactionData,
      showModal: false,
    });
  };

  return (
    <AppModal
      title={
        updateTransaction.formData ? "Edit Transaction" : "Add New Transaction"
      }
      content={
        <TransactionForm formData={formData} setFormData={setFormData} />
      }
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
