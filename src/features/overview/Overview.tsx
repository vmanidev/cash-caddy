import { Divider, Grid, Paper, Stack } from "@mui/material";

import styles from "./Overview.module.scss";
import { transactionSummaryCard } from "../../constants/overview";
import { CurrencyRupee } from "@mui/icons-material";
import { calculateTransactions } from "../../utils/calculate";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

function Overview() {
  const [total, setTotal] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });

  const transactionData = useSelector((state: any) => state.transactions);

  const getTotal = useMemo(
    () => calculateTransactions(transactionData),
    [transactionData]
  );

  useEffect(
    () =>
      setTotal({
        income: getTotal.totalIncome(),
        expenses: getTotal.totalExpenses(),
        balance: getTotal.totalBalance(),
      }),
    [transactionData]
  );

  const TransactionOverview = () =>
    transactionSummaryCard.map(({ type, displayText }) => (
      <Grid
        size={
          type === "balance"
            ? { xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }
            : { xs: 6, sm: 4, md: 4, lg: 4, xl: 4 }
        }
        key={type}
      >
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
              {transactionData.length > 0 ? (
                <>
                  <CurrencyRupee fontSize="small" /> {total[type]}
                </>
              ) : (
                "--"
              )}
            </div>
          </Stack>
        </Paper>
      </Grid>
    ));

  return (
    <>
      <Grid container spacing={{ xs: 2, sm: 2, md: 6, lg: 6, xl: 6 }}>
        <TransactionOverview />
      </Grid>
    </>
  );
}

export default Overview;
