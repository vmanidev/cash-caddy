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
  setFormData: (props: any) => void;
}

function CategoryForm({ formData, setFormData }: Props) {
  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev: any) => {
      return name === "name"
        ? { ...prev, name: { key: value, value: value } }
        : { ...prev, [name]: value };
    });
  };

  return (
    <Grid container spacing={4} paddingTop={1} size={12}>
      <Grid size={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Category name"
          name="name"
          value={formData.name.value}
          onChange={handleFormChange}
          helperText="e.g. Food, Groceries, etc."
        />
      </Grid>

      <Grid size={12} alignContent="center">
        <FormLabel>Type</FormLabel>
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
  );
}

export default CategoryForm;
