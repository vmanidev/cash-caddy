import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import type { CategoryFormData, FormError } from "../../../models/form";
import { validateField } from "../../../utils/formValidation";

interface Props {
  editMode: boolean;
  formData: CategoryFormData;
  setFormData: (props: any) => void;
  formError: FormError;
  setFormError: (props: FormError) => void;
}

function CategoryForm({
  editMode,
  formData,
  setFormData,
  formError,
  setFormError,
}: Props) {
  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev: any) => {
      return name === "name"
        ? { ...prev, name: { key: value, value: value } }
        : { ...prev, [name]: value };
    });
  };

  const validateFormField = (field: string, { value }: any) => {
    setFormError(validateField({ field, value }));
  };

  const getHelperText = () =>
    formError.hasError
      ? formError.errorMessage
      : formData.type === "income"
      ? "e.g. Salary, Bonus, etc."
      : "e.g. Food, Groceries, etc.";

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
          helperText={getHelperText()}
          error={formError.hasError}
          onInput={({ target }) => validateFormField("Category name", target)}
        />
      </Grid>

      {!editMode && (
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
      )}
    </Grid>
  );
}

export default CategoryForm;
