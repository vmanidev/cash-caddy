import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { Transaction } from "../../../store/types";
import { useState } from "react";
import UpdateTransaction from "./UpdateTransaction";
import { initialData } from "../../../constants/form";
import type {
  DeleteTransactionModalProps,
  UpdateTransactionStateProps,
} from "../../../models/transactions";
import type { FormData } from "../../../models/form";
import AppModal from "../../ui/modal/Modal";
import { removeTransaction } from "../../../store/features/transactionSlice";

interface Props {
  count?: number;
}

function TransactionRows({ count }: Props) {
  const [editTransaction, setEditTransaction] =
    useState<UpdateTransactionStateProps>({
      formData: initialData,
      showModal: false,
    });

  const [deleteModal, setDeleteModal] = useState<DeleteTransactionModalProps>({
    id: "",
    showModal: false,
  });

  const transactionData: Transaction[] = useSelector(
    (state: any) => state.transactions
  );

  const dispatch = useDispatch();

  const getTransactionRows = () => {
    return transactionData
      .slice(0, count)
      .map(({ id, date, amount, category, type, note }) => {
        return (
          <TableRow key={id} hover>
            <TableCell>{date}</TableCell>
            <TableCell>{note}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell
              className={type === "income" ? "income-text" : "expenses-text"}
            >
              {`${type === "income" ? "+" : "-"} ${amount}`}
            </TableCell>
            <TableCell>
              <ButtonGroup variant="text">
                <Button
                  onClick={() =>
                    editTransactionRow({
                      id,
                      date,
                      amount,
                      category,
                      type,
                      note,
                    })
                  }
                >
                  <Edit />
                </Button>
                <Button onClick={() => (id ? showDeleteModal(id) : null)}>
                  <Delete color="error" />
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        );
      });
  };

  const editTransactionRow = (formData: FormData) => {
    setEditTransaction({ formData, showModal: true });
  };

  const showDeleteModal = (id: string) => {
    setDeleteModal({ id, showModal: true });
  };

  const deleteTransactionRow = () => {
    dispatch(removeTransaction(deleteModal.id));
    setDeleteModal({ id: "", showModal: false });
  };

  return (
    <>
      {deleteModal.showModal && (
        <AppModal
          title="Delete Transaction"
          content={<span>Are you sure want to delete the transaction?</span>}
          actionButtons={
            <>
              <Button variant="text" onClick={() => deleteTransactionRow()}>
                <Delete color="error" />
              </Button>
              <Button
                variant="text"
                onClick={() => setDeleteModal({ id: "", showModal: false })}
              >
                Cancel
              </Button>
            </>
          }
        />
      )}
      {editTransaction.showModal && (
        <UpdateTransaction
          updateTransaction={editTransaction}
          setUpdateTransaction={setEditTransaction}
        />
      )}
      {getTransactionRows()}
    </>
  );
}

export default TransactionRows;
