import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import type { IncomeExpensesItem } from "../store/types";
import { useSelector } from "react-redux";
import { CurrencyRupee } from "@mui/icons-material";

function Settings() {
  const categories = useSelector((state: any) => state.categories);

  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1" className="page-description">
        Personalize the app to fit your needs — adjust preferences, manage data
        options, and explore customization features.
      </Typography>
      <Grid size={12} container>
        <Typography variant="h6">Budget Settings</Typography>
        <Grid size={12} container>
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
            spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
          >
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" name="category">
                {categories.expenses.map((item: IncomeExpensesItem) => (
                  <MenuItem key={item.key} value={item.key}>
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select a category</FormHelperText>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Budget Limit"
              name="budget"
              helperText="Set your budget limit"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Button variant="contained" size="large">
            Create Budget
          </Button>
        </Grid>
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Settings;
