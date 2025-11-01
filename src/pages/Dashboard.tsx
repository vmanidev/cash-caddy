import { Grid, Typography } from "@mui/material";
import Overview from "../features/overview/Overview";
import TransactionTable from "../features/transaction-management/transactionTable/TransactionTable";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";

function Dashboard() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1">
        Track income, expenses, budgets, and trends - all in one{" "}
        <Typography variant="button" color="primary">
          Dashboard
        </Typography>
      </Typography>
      <Grid size={12}>
        <Overview />
      </Grid>
      <Grid size={12}>
        <TransactionTable tableTitle="Recent Transactions" />
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
