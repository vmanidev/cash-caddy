import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Overview from "../features/overview/Overview";
import TransactionTable from "../features/transaction-management/transactionTable/TransactionTable";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";

function Dashboard() {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1" className="page-description">
        View all your key financial insights in one place — track income,
        expenses, budgets, and spending trends through a clean, interactive
        dashboard.
      </Typography>
      {breakpoint ? (
        <>
          <Overview />
          <TransactionTable tableTitle="Recent Transactions" />
        </>
      ) : (
        <Grid container size={12}>
          <Grid container size={9}>
            <Overview />
            <TransactionTable tableTitle="Recent Transactions" />
          </Grid>
          <Grid container size={3}></Grid>
        </Grid>
      )}

      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
