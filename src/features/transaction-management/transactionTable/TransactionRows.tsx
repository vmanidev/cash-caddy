import {
  AccountBalance,
  CalendarMonth,
  Delete,
  Description,
  Edit,
  NorthEast,
  Payments,
  SouthWest,
  Warning,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Chip,
  Grid,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { TransactionPayload } from "../../../store/types";
import { Fragment, useMemo, useState } from "react";
import UpdateTransaction from "../UpdateTransaction";
import {
  initialTransactionData,
  PAYMENT_MODE_LABEL,
} from "../../../constants/form";
import type {
  DeleteTransactionModalProps,
  UpdateTransactionStateProps,
} from "../../../models/transactions";
import type { TransactionFormData } from "../../../models/form";
import AppModal from "../../../components/ui/modal/Modal";
import { removeTransaction } from "../../../store/features/transactionSlice";
import formatDate, { sortByDate } from "../../../utils/date";
import useCategoryMap from "../../../hooks/useCategoryMap";
import { pink, teal } from "@mui/material/colors";
import { formatLocaleCurrency } from "../../../utils/currency";

interface Props {
  page: number;
  rowsPerPage: number;
}

function TransactionRows({ page, rowsPerPage }: Props) {
  const [editTransaction, setEditTransaction] =
    useState<UpdateTransactionStateProps>({
      formData: initialTransactionData,
      editMode: false,
      showModal: false,
    });

  const [deleteModal, setDeleteModal] = useState<DeleteTransactionModalProps>({
    id: "",
    showModal: false,
  });

  const transactionData: TransactionPayload[] = useSelector(
    (state: any) => state.transactions
  );

  const dispatch = useDispatch();

  const categoryMap = useCategoryMap();

  const renderList = useMemo(() => {
    let sortedTransactionsByDate = sortByDate([...transactionData]);
    return sortedTransactionsByDate.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [page, rowsPerPage]);

  const getTransactionRows = () => {
    return renderList.map(
      ({
        id,
        date,
        amount,
        category,
        type,
        note,
        payment_mode,
      }: TransactionFormData) => {
        return (
          <Fragment key={id}>
            <TableRow>
              <TableCell>
                <Grid display="flex" alignItems="center">
                  <CalendarMonth fontSize="small" color="action" />
                  <Typography variant="button">
                    {formatDate(date).getRelativeDateLabel()}
                  </Typography>
                </Grid>
              </TableCell>
              <TableCell
                sx={{ color: type === "income" ? teal[500] : pink[500] }}
              >
                <Grid display="flex" alignItems="center">
                  {type === "income" ? (
                    <NorthEast fontSize="small" />
                  ) : (
                    <SouthWest fontSize="small" />
                  )}
                  <Typography variant="button">
                    {formatLocaleCurrency(amount)}
                  </Typography>
                </Grid>
              </TableCell>
              <TableCell>
                <Chip label={categoryMap[category]} variant="filled" />
              </TableCell>
              <TableCell>
                <Chip
                  label={PAYMENT_MODE_LABEL[payment_mode]}
                  variant="filled"
                  icon={
                    payment_mode === "cash" ? (
                      <Payments fontSize="small" color="success" />
                    ) : (
                      <AccountBalance fontSize="small" color="primary" />
                    )
                  }
                />
              </TableCell>
              <TableCell
                sx={{
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
                title={note}
              >
                <Grid display="flex" alignItems="center">
                  <Description fontSize="small" color="action" />
                  <Typography variant="subtitle2">{note}</Typography>
                </Grid>
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
                        payment_mode,
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
          </Fragment>
        );
      }
    );
  };

  const editTransactionRow = (formData: TransactionFormData) => {
    setEditTransaction({ formData, editMode: true, showModal: true });
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
          title={
            <Stack direction="row" gap={1} alignItems="center">
              <Warning fontSize="small" color="warning" />
              <span>Delete Transaction</span>
            </Stack>
          }
          content={<span>Are you sure want to delete the transaction?</span>}
          actionButtons={
            <>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteTransactionRow()}
              >
                <Delete /> Delete
              </Button>
              <Button
                variant="outlined"
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
