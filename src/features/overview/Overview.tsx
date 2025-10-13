import { Grid, Paper } from "@mui/material";

import styles from "./Overview.module.scss";

function Overview() {
  return (
    <Grid container spacing={6}>
      <Grid size={4}>
        <Paper
          className={`${styles.paper} ${styles.incomePaper}`}
          elevation={4}
        >
          Total Income
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper
          className={`${styles.paper} ${styles.expensesPaper}`}
          elevation={4}
        >
          Total Expenses
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper className={styles.paper} elevation={4}>
          Total Balance
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Overview;
