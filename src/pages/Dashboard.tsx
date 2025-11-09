import {
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Overview from "../features/overview/Overview";
import TransactionTable from "../features/transaction-management/transactionTable/TransactionTable";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import AppPieChart from "../components/ui/charts/AppPieChart";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { calculateTransactions } from "../utils/calculate";
import { overviewPieChartData } from "../constants/charts";
import type { ChartStateProps } from "../models/charts";
import useTransactionsByCategory from "../hooks/useTransactionsByCategory";
import { getExpensePieChartData } from "../utils/charts";

function Dashboard() {
  const [chart, setChart] = useState<ChartStateProps>({
    overviewPie: { data: overviewPieChartData, pieCenterText: "Overview" },
    expensePie: { data: [], pieCenterText: "Expenses" },
  });

  const transactions = useSelector((state: any) => state.transactions);

  const getTotal = useMemo(
    () => calculateTransactions(transactions),
    [transactions]
  );

  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  const transactionsByExpenseCategory = useTransactionsByCategory("expenses");

  useEffect(() => {
    setChart((prev: ChartStateProps) => {
      const overviewPieData = prev.overviewPie.data.map((item) => {
        item.value =
          item.label.toLowerCase() === "income"
            ? getTotal.totalIncome()
            : item.label.toLowerCase() === "expenses"
            ? getTotal.totalExpenses()
            : getTotal.totalBalance();
        return item;
      });

      const expensePieData = getExpensePieChartData(
        transactionsByExpenseCategory
      );

      prev.overviewPie = { ...prev.overviewPie, data: overviewPieData };
      prev.expensePie = { ...prev.expensePie, data: expensePieData };

      return prev;
    });
  }, [transactions, transactionsByExpenseCategory]);

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
          {transactions.length > 0 && (
            <Paper elevation={4} sx={{ width: "100%", height: "100%" }}>
              <Stack
                direction="column"
                divider={<Divider orientation="horizontal" />}
              >
                <Grid spacing={2} margin={2}>
                  <AppPieChart
                    data={chart.overviewPie.data}
                    pieCenterText={chart.overviewPie.pieCenterText}
                  />
                </Grid>
                {chart.expensePie.data.length > 0 && (
                  <Grid spacing={2} margin={2}>
                    <AppPieChart
                      data={chart.expensePie.data}
                      pieCenterText={chart.expensePie.pieCenterText}
                    />
                  </Grid>
                )}
              </Stack>
            </Paper>
          )}
          <TransactionTable tableTitle="Recent Transactions" />
        </>
      ) : (
        <Grid container size={12}>
          <Grid container size={8}>
            <Overview />
            <TransactionTable tableTitle="Recent Transactions" />
          </Grid>
          {transactions.length > 0 && (
            <Grid container size={4}>
              <Paper elevation={4} sx={{ width: "100%", height: "100%" }}>
                <Stack
                  direction="column"
                  divider={<Divider orientation="horizontal" />}
                >
                  <Grid spacing={2} margin={2}>
                    <AppPieChart
                      data={chart.overviewPie.data}
                      pieCenterText={chart.overviewPie.pieCenterText}
                    />
                  </Grid>
                  {chart.expensePie.data.length > 0 && (
                    <Grid spacing={2} margin={2}>
                      <AppPieChart
                        data={chart.expensePie.data}
                        pieCenterText={chart.expensePie.pieCenterText}
                      />
                    </Grid>
                  )}
                </Stack>
              </Paper>
            </Grid>
          )}
        </Grid>
      )}

      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
