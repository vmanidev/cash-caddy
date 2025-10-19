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
import AddTransaction from "../addTransaction/AddTransaction";
import { useState } from "react";
import TransactionRows from "../../components/common/transactions/TransactionRows";

function Transactions() {
  const [addTransactionForm, setAddTransactionForm] = useState(false);

  return (
    <>
      {addTransactionForm && (
        <AddTransaction setAddTransactionForm={setAddTransactionForm} />
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
            onClick={() => setAddTransactionForm(true)}
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
              <TransactionRows count={3} />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default Transactions;
