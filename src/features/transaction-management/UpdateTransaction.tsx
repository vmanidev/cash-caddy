import { Button, Stack } from "@mui/material";
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
import { Info } from "@mui/icons-material";

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
    setUpdateTransaction({ formData, editMode: false, showModal: false });
  };

  const onCancel = () => {
    setUpdateTransaction({
      formData: initialTransactionData,
      editMode: false,
      showModal: false,
    });
  };

  return (
    <AppModal
      title={
        <Stack direction="row" gap={1} alignItems="center">
          <Info fontSize="small" color="info" />
          <span>
            {updateTransaction.editMode
              ? "Edit Transaction"
              : "Add New Transaction"}
          </span>
        </Stack>
      }
      content={
        <TransactionForm formData={formData} setFormData={setFormData} />
      }
      actionButtons={
        <>
          <Button variant="contained" onClick={onSubmit}>
            {updateTransaction.editMode ? "Update" : "Add"}
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </>
      }
    ></AppModal>
  );
}

export default UpdateTransaction;
