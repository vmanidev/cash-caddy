import { Divider, Grid, Paper, Stack } from "@mui/material";

import styles from "./Overview.module.scss";
import { transactionSummaryCard } from "../../constants/overview";

function Overview() {
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
            <div className={styles.valueHolder}>₹ 0</div>
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
