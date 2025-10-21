import { Divider, Grid, Paper, Stack } from "@mui/material";

import styles from "./Overview.module.scss";
import { transactionSummaryCard } from "../../constants/overview";
import { CurrencyRupee } from "@mui/icons-material";
import { calculateTransactions } from "../../utils/calculate";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Overview() {
  const [total, setTotal] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });

  const transactionData = useSelector((state: any) => state.transactions);

  useEffect(
    () =>
      setTotal({
        income: calculateTransactions(transactionData).totalIncome(),
        expenses: calculateTransactions(transactionData).totalExpenses(),
        balance: calculateTransactions(transactionData).totalBalance(),
      }),
    [transactionData]
  );

  const TransactionSummary = () =>
    transactionSummaryCard.map(({ type, displayText }) => (
      <Grid size={4} key={type}>
        <Paper className={`${styles.paper} ${styles[type]}`} elevation={4}>
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <div>{displayText}</div>
            <div className={styles.valueHolder}>
              <CurrencyRupee /> {total[type]}
            </div>
          </Stack>
        </Paper>
      </Grid>
    ));

  return (
    <>
      <Grid container spacing={6}>
        <TransactionSummary />
      </Grid>
    </>
  );
}

export default Overview;
