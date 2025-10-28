import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";

import styles from "./TransactionTable.module.scss";
import { Add } from "@mui/icons-material";
import UpdateTransaction from "../../components/common/transactions/UpdateTransaction";
import { useState } from "react";
import TransactionRows from "../../components/common/transactions/TransactionRows";
import type { UpdateTransactionStateProps } from "../../models/transactions";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  tableTitle: string;
}

function TransactionTable({ tableTitle }: Props) {
  const [addTransaction, setAddTransaction] =
    useState<UpdateTransactionStateProps>({ showModal: false });

  const [page, setPage] = useState({
    event: null,
    newPage: 0,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const transactionData = useSelector((state: any) => state.transactions);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (event: any, newPage: number) => {
    setPage({ event, newPage });
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage({ event: null, newPage: 0 });
  };

  const viewAllTransactions = () => {
    navigate("/transactions", { state: "app.transactions" });
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const TableView = () => (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="Transaction table">
          <TableBody>
            <TransactionRows page={page.newPage} rowsPerPage={rowsPerPage} />
          </TableBody>
        </Table>
      </TableContainer>

      {location.state === "app.transactions" ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={transactionData.length}
          rowsPerPage={rowsPerPage}
          page={page.newPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : transactionData.length > 5 ? (
        <Button size="small" variant="text" onClick={viewAllTransactions}>
          View All Transactions
        </Button>
      ) : null}
    </>
  );

  const EmptyTableView = () => (
    <div className={styles.emptyTableViewText}>
      Looks like you haven`t added any transactions yet. Tap{" "}
      <strong className={styles.emptyTableViewHighlightText}>
        Add New Transaction
      </strong>{" "}
      to get started!
    </div>
  );

  return (
    <>
      {addTransaction.showModal && (
        <UpdateTransaction
          updateTransaction={addTransaction}
          setUpdateTransaction={setAddTransaction}
        />
      )}
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
        <Paper elevation={4}>
          <Grid
            size={12}
            display="flex"
            justifyContent="space-between"
            padding={2}
            alignItems="center"
          >
            <span className="section-title">{tableTitle}</span>
            <Button
              size="small"
              variant="outlined"
              onClick={() => setAddTransaction({ showModal: true })}
            >
              <Add fontSize="small" /> Add new transaction
            </Button>
          </Grid>
          {transactionData.length > 0 ? <TableView /> : <EmptyTableView />}
        </Paper>
      </Grid>
    </>
  );
}

export default TransactionTable;
