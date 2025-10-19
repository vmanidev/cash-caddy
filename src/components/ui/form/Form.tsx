import type { FormData } from "../../../models/form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";

interface Props {
  formData: FormData;
  setFormData: (prev: any) => void;
}

function Form({ formData, setFormData }: Props) {
  const handleFormChange = (event: any) => {
    if (event === null) return;

    if (dayjs.isDayjs(event)) {
      setFormData((prev: any) => {
        if (prev) return { ...prev, date: event.format("YYYY-MM-DD") };
      });
    } else {
      const { name, value } = event.target;
      setFormData((prev: any) => {
        if (prev) return { ...prev, [name]: value };
      });
    }
  };

  return (
    <Grid container spacing={4} margin={2} size={12}>
      <Grid size={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Transaction date"
            value={
              formData.date.length > 0
                ? dayjs(formData.date, "YYYY-MM-DD")
                : null
            }
            onChange={handleFormChange}
            slotProps={{
              textField: { fullWidth: true, helperText: "Pick a date" },
            }}
          />
        </LocalizationProvider>
      </Grid>

      <Grid size={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleFormChange}
          helperText="Enter the amount (numbers only)"
        />
      </Grid>

      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleFormChange}
          >
            <MenuItem value="test">Test</MenuItem>
          </Select>
          <FormHelperText>Select a category</FormHelperText>
        </FormControl>
      </Grid>

      <Grid size={6} alignContent="center">
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

      <Grid size={12}>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          minRows={4}
          label="Note"
          name="note"
          value={formData.note}
          onChange={handleFormChange}
          helperText="Add a note for this transaction"
        />
      </Grid>
    </Grid>
  );
}

export default Form;
