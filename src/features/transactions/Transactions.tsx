import {
  Button,
  ButtonGroup,
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
import { Add, Delete, Edit } from "@mui/icons-material";
import AddTransaction from "../addTransaction/AddTransaction";
import { useState } from "react";

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
              <TableRow hover>
                {/* mock data */}
                <TableCell>Oct 10, 2025</TableCell>
                <TableCell>Paid to Chaat Shop</TableCell>
                <TableCell>Food & Beverages</TableCell>
                <TableCell>Rs. 200</TableCell>
                <TableCell>
                  <ButtonGroup variant="text">
                    <Button>
                      <Edit />
                    </Button>
                    <Button>
                      <Delete color="error" />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default Transactions;
