import { useState } from "react";
import type { FormData, Mode } from "../../../models/form";
import { initialData } from "../../../constants/form";
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

interface Props {
  inputFormData?: FormData;
  mode: Mode;
}

function Form(props: Props) {
  const [formData, setFormData] = useState(
    props.mode === "add" ? initialData : props?.inputFormData
  );

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      if (prev) return { ...prev, [name]: value };
    });
  };

  return (
    <Grid container spacing={4} margin={2} size={12}>
      <Grid size={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date" />
        </LocalizationProvider>
      </Grid>

      <Grid size={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          name="amount"
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
            <MenuItem>Test</MenuItem>
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
