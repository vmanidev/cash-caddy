import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import AppHeader from "../components/common/Header";
import TransactionTable from "../features/transaction-management/transactionTable/TransactionTable";
import AppFooter from "../components/common/Footer";
import TransactionBarChart from "../components/common/charts/TransactionBarChart";

function Transactions() {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1" className="page-description">
        Add new transactions, quickly edit existing ones, or manage past records
        to keep your data accurate and organized.
      </Typography>
      <Grid container size={12}>
        {breakpoint ? (
          <>
            <TransactionTable tableTitle="Transactions" />
            <Grid minHeight="300px" maxHeight="450px">
              <TransactionBarChart />
            </Grid>
          </>
        ) : (
          <>
            <Grid size={9}>
              <TransactionTable tableTitle="Transactions" />
            </Grid>
            <Grid size={3} maxHeight="450px">
              <TransactionBarChart />
            </Grid>
          </>
        )}
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Transactions;
