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

import styles from "./Transactions.module.scss";
import { Add } from "@mui/icons-material";
import UpdateTransaction from "../../components/common/transactions/UpdateTransaction";
import { useState } from "react";
import TransactionRows from "../../components/common/transactions/TransactionRows";
import type { UpdateTransactionStateProps } from "../../models/transactions";

interface Props {
  transactionCount?: number;
}

function Transactions({ transactionCount }: Props) {
  const [addTransaction, setAddTransaction] =
    useState<UpdateTransactionStateProps>({ showModal: false });

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
            onClick={() =>
              setAddTransaction((prev) => ({ ...prev, showModal: true }))
            }
          >
            <Add /> Add new transaction
          </Button>
        </Grid>
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
              <TransactionRows count={transactionCount} />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default Transactions;
