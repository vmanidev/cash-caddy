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
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../../../store/types";

function BudgetForm() {
  const categories = useSelector((state: any) => state.categories);

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
      paddingTop={1}
      size={12}
    >
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select label="Category" name="category">
            <MenuItem key="addNewCategory" value="addNewCategory">
              <Button sx={{ padding: 0 }} variant="text">
                Add new Category
              </Button>
            </MenuItem>
            {categories.expenses.map((item: IncomeExpensesItem) => (
              <MenuItem key={item.key} value={item.key}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select a category.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Budget Limit"
          name="budgetLimit"
          helperText="Set your budget limit."
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
    </Grid>
  );
}

export default BudgetForm;
