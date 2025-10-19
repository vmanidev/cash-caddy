import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import type { Transaction } from "../../../store/types";
import { useState } from "react";
import UpdateTransaction from "./UpdateTransaction";
import { initialData } from "../../../constants/form";
import type { UpdateTransactionStateProps } from "../../../models/transactions";
import type { FormData } from "../../../models/form";

interface Props {
  count?: number;
}

function TransactionRows({ count }: Props) {
  const [editTransaction, setEditTransaction] =
    useState<UpdateTransactionStateProps>({
      formData: initialData,
      showModal: false,
    });

  const transactionData: Transaction[] = useSelector(
    (state: any) => state.transactions
  );

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
              {amount}
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
                <Button>
                  <Delete color="error" />
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        );
      });
  };

  const editTransactionRow = (formData: FormData) => {
    setEditTransaction((prev: any) => ({ ...prev, formData, showModal: true }));
  };

  return (
    <>
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
