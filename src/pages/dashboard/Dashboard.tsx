import { Grid } from "@mui/material";
import Overview from "../../features/overview/Overview";
import TransactionTable from "../../features/transactions-management/transactionTable/TransactionTable";
import AppHeader from "../../components/common/header/Header";
import AppFooter from "../../components/common/footer/Footer";

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
