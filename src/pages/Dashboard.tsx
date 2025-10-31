import { Grid } from "@mui/material";
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
