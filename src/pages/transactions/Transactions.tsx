import { Grid } from "@mui/material";
import AppHeader from "../../components/common/header/Header";
import TransactionTable from "../../features/transactionTable/TransactionTable";

function Transactions() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Grid size={12}>
        <TransactionTable tableTitle="Transactions" />
      </Grid>
    </Grid>
  );
}

export default Transactions;
