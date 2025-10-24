import { Grid } from "@mui/material";
import Overview from "../../features/overview/Overview";
import TransactionTable from "../../features/transactionTable/TransactionTable";
import AppHeader from "../../components/common/header/Header";

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
    </Grid>
  );
}

export default Dashboard;
