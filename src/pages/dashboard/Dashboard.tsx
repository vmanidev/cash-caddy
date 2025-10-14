import { Grid } from "@mui/material";
import Overview from "../../features/overview/Overview";
import Transactions from "../../features/transactions/Transactions";

function Dashboard() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <Overview />
      </Grid>
      <Grid size={12}>
        <Transactions />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
