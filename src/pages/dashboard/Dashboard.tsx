import { Grid } from "@mui/material";
import Overview from "../../features/overview/Overview";
import TransactionTable from "../../features/transactionTable/TransactionTable";

function Dashboard() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <Overview />
      </Grid>
      <Grid size={12}>
        <TransactionTable
          tableTitle="Recent Transactions"
          transactionCount={5}
        />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
