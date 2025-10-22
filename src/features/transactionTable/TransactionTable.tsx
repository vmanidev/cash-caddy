import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { transactionTableColumn } from "../../constants/table";

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const transactionData = useSelector((state: any) => state.transactions);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TableView = () => (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="Transaction table">
          <TableHead>
            <TableRow>
              {transactionTableColumn.map(({ id, label }) => {
                return (
                  <TableCell
                    className={styles.tableHeaderCell}
                    key={id}
                    id={id}
                  >
                    {label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            <TransactionRows page={page} rowsPerPage={rowsPerPage} />
          </TableBody>
        </Table>
      </TableContainer>

      {location.state === "app.transactions" ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={transactionData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : (
        <Button
          variant="text"
          onClick={() =>
            navigate("/transactions", { state: "app.transactions" })
          }
        >
          View All Transactions
        </Button>
      )}
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
            variant="outlined"
            onClick={() => setAddTransaction({ showModal: true })}
          >
            <Add /> Add new transaction
          </Button>
        </Grid>
        {transactionData.length > 0 ? <TableView /> : <EmptyTableView />}
      </Paper>
    </>
  );
}

export default TransactionTable;
