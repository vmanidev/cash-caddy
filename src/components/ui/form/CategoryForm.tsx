import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import type { CategoryFormData } from "../../../models/form";

interface Props {
  formData: CategoryFormData;
  setFormData: (prev: any) => void;
}

function CategoryForm({ formData, setFormData }: Props) {
  const handleFormChange = (event: any) => {
    if (event === null) return;

    const { name, value } = event.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
      paddingTop={0.5}
      size={12}
    >
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          name="amount"
          value={formData.name}
          onChange={handleFormChange}
          helperText="Enter the amount (numbers only)"
        />
        <Grid
          size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
          alignContent="center"
        >
          <FormLabel>Transaction type</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              label="Income"
              control={
                <Radio
                  name="type"
                  value="income"
                  checked={formData.type === "income"}
                  onChange={handleFormChange}
                />
              }
            />
            <FormControlLabel
              label="Expenses"
              control={
                <Radio
                  name="type"
                  value="expenses"
                  checked={formData.type === "expenses"}
                  onChange={handleFormChange}
                />
              }
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CategoryForm;
