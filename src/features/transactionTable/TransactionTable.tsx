import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
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

interface Props {
  transactionCount?: number;
}

function Transactions({ transactionCount }: Props) {
  const [addTransaction, setAddTransaction] =
    useState<UpdateTransactionStateProps>({ showModal: false });

  const transactionData = useSelector((state: any) => state.transactions);

  const TableView = () => (
    <TableContainer>
      <Table stickyHeader aria-label="Transaction table">
        <TableHead>
          <TableRow>
            {transactionTableColumn.map(({ id, label }) => {
              return (
                <TableCell className={styles.tableHeaderCell} key={id} id={id}>
                  {label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          <TransactionRows count={transactionCount} />
        </TableBody>
      </Table>
    </TableContainer>
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
          <span className="section-title">Recent transactions</span>
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

export default Transactions;
