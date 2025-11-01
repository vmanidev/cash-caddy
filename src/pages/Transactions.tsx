import { Grid, Typography } from "@mui/material";
import AppHeader from "../components/common/Header";
import TransactionTable from "../features/transaction-management/transactionTable/TransactionTable";
import AppFooter from "../components/common/Footer";

function Transactions() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1">
        Log new transactions, make quick edits, or clean up old ones.
      </Typography>
      <Grid size={12}>
        <TransactionTable tableTitle="Transactions" />
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Transactions;
