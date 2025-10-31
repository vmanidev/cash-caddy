import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { Transaction } from "../../../store/types";
import { Fragment, useMemo, useState } from "react";
import UpdateTransaction from "../UpdateTransaction";
import { initialTransactionData } from "../../../constants/form";
import type {
  DeleteTransactionModalProps,
  UpdateTransactionStateProps,
} from "../../../models/transactions";
import type { TransactionFormData } from "../../../models/form";
import AppModal from "../../../components/ui/modal/Modal";
import { removeTransaction } from "../../../store/features/transactionSlice";
import formatDate, { sortByDate } from "../../../utils/date";

interface Props {
  page: number;
  rowsPerPage: number;
}

function TransactionRows({ page, rowsPerPage }: Props) {
  const [editTransaction, setEditTransaction] =
    useState<UpdateTransactionStateProps>({
      formData: initialTransactionData,
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

  const renderList = useMemo(() => {
    let sortedTransactionsByDate = sortByDate([...transactionData]);
    return sortedTransactionsByDate.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [page, rowsPerPage]);

  const getTransactionRows = () => {
    return renderList.map(({ id, date, amount, category, type, note }) => {
      return (
        <Fragment key={id}>
          <TableRow sx={{ "& td, & th": { borderBottom: "none" } }}>
            <TableCell>{formatDate(date).getRelativeDateLabel()}</TableCell>
            <TableCell
              className={type === "income" ? "income-text" : "expenses-text"}
            >
              {`${amount && (type === "income" ? "+" : "-")} ${amount}`}
            </TableCell>
            <TableCell>{category}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} sx={{ padding: 0 }}>
              <Collapse in={true}>
                <Table size="small">
                  <TableBody>
                    <TableRow sx={{ "& td, & th": { border: "none" } }}>
                      <TableCell sx={{ fontStyle: "italic", width: "70%" }}>
                        {note}
                      </TableCell>
                      <TableCell sx={{ width: "30%" }}>
                        <ButtonGroup variant="text" size="small">
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
                          <Button
                            onClick={() => (id ? showDeleteModal(id) : null)}
                          >
                            <Delete color="error" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Collapse>
            </TableCell>
          </TableRow>
        </Fragment>
      );
    });
  };

  const editTransactionRow = (formData: TransactionFormData) => {
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
