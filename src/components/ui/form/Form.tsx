import type { FormData } from "../../../models/form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
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
        if (prev) return { ...prev, date: event };
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
            value={formData.date}
            onChange={handleFormChange}
            slotProps={{
              textField: { fullWidth: true, value: formData.date },
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
          placeholder="Ex. ₹2,000"
          value={formData?.amount}
          onChange={handleFormChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>

      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData?.category}
            onChange={handleFormChange}
          >
            <MenuItem value="test">Test</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={6} alignContent="center">
        <RadioGroup row>
          <FormControlLabel
            label="Income"
            control={
              <Radio
                name="type"
                value="income"
                checked={formData?.type === "income"}
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
                checked={formData?.type === "expenses"}
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
          value={formData?.note}
          onChange={handleFormChange}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
