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
          <Select label="Category">
            <MenuItem>Test</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={6} alignContent="center">
        <RadioGroup row>
          <FormControlLabel value="income" label="Income" control={<Radio />} />
          <FormControlLabel
            value="expenses"
            label="Expenses"
            control={<Radio />}
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
        />
      </Grid>
    </Grid>
  );
}

export default Form;
