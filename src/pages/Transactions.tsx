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
      <Typography variant="body1" className="page-description">
        Add new transactions, quickly edit existing ones, or manage past records
        to keep your data accurate and organized.
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
