import { Divider, Grid, Paper, Stack } from "@mui/material";

import styles from "./Overview.module.scss";

function Overview() {
  const TransactionSummary = () =>
    [
      { type: "income", displayText: "Total Income", value: "23000" },
      { type: "expenses", displayText: "Total Expenses", value: "3000" },
      { type: "balance", displayText: "Total Balance", value: "20000" },
    ].map(({ type, displayText, value }) => (
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
            <div className={styles.valueHolder}>₹ {value}</div>
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
