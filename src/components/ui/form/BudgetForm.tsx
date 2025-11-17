import {
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
import type { BudgetFormData } from "../../../models/form";

interface Props {
  formData: BudgetFormData;
  setFormData: (props: any) => void;
}

function BudgetForm({ formData, setFormData }: Props) {
  const categories = useSelector((state: any) => state.categories);

  const onFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

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
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={onFormChange}
          >
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
          name="limit"
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
          value={formData.limit}
          onChange={onFormChange}
        />
      </Grid>
    </Grid>
  );
}

export default BudgetForm;
