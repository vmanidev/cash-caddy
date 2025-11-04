import type { FieldType, TransactionFormData } from "../../../models/form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import {
  HELPER_TEXT,
  initialCategoryData,
  PAYMENT_MODE_LABEL,
} from "../../../constants/form";
import type { UpdateCategoryStateProps } from "../../../models/categories";
import UpdateCategory from "../../../features/category-management/UpdateCategory";
import { useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../../../store/types";
import { validateField } from "../../../utils/formValidation";
import { pink, teal } from "@mui/material/colors";
import { CurrencyRupee } from "@mui/icons-material";

interface Props {
  formData: TransactionFormData;
  setFormData: (prev: any) => void;
  formError: any;
  setFormError: (prev: any) => void;
}

function TransactionForm({
  formData,
  setFormData,
  formError,
  setFormError,
}: Props) {
  const [updateCategory, setUpdateCategory] =
    useState<UpdateCategoryStateProps>({
      formData: initialCategoryData,
      editMode: false,
      showModal: false,
    });

  const categories = useSelector((state: any) => state.categories);

  const handleFormChange = (event: any) => {
    if (event === null) return;

    if (dayjs.isDayjs(event)) {
      setFormData((prev: any) => ({
        ...prev,
        date: event.format("YYYY-MM-DD"),
      }));
    } else {
      const { name, value } = event.target;
      if (name === "type") {
        setFormData((prev: any) => ({ ...prev, category: "" })); // Reset category name field upon type change
      }
      value === "addNewCategory"
        ? addNewCategory()
        : setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const addNewCategory = () => {
    setUpdateCategory({
      formData: { name: initialCategoryData.name, type: formData.type },
      editMode: false,
      showModal: true,
    });
  };

  const validateFormField = (event: any) => {
    const { name, value } = event.target;
    setFormError((prev: any) => ({
      ...prev,
      [name]: validateField({ field: name, value }),
    }));
  };

  const getHelperText = (field: FieldType) =>
    formError?.[field]?.errorMessage
      ? formError?.[field]?.errorMessage
      : HELPER_TEXT[field];

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
        paddingTop={1}
        size={12}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
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
                textField: {
                  fullWidth: true,
                  helperText: getHelperText("date"),
                  error: formError?.date?.hasError && !formData.date,
                  onInput: validateFormField,
                },
              }}
              disableFuture
            />
          </LocalizationProvider>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleFormChange}
            helperText={getHelperText("amount")}
            error={formError?.amount?.hasError}
            onInput={validateFormField}
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
                  sx={{
                    color: teal[800],
                    "&.Mui-checked": {
                      color: teal[600],
                    },
                  }}
                />
              }
            />
            <FormControlLabel
              label="Expense"
              control={
                <Radio
                  name="type"
                  value="expenses"
                  checked={formData.type === "expenses"}
                  onChange={handleFormChange}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
            />
          </RadioGroup>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={(event) => {
                handleFormChange(event);
                validateFormField(event);
              }}
              error={formError?.category?.hasError}
            >
              <MenuItem key="addNewCategory" value="addNewCategory">
                <Button sx={{ padding: 0 }} variant="text">
                  Add new Category
                </Button>
              </MenuItem>
              {categories[formData.type].map((item: IncomeExpensesItem) => (
                <MenuItem key={item.key} value={item.key}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText
              sx={{
                color: formError?.category?.hasError ? "#d32f2f" : "inherit",
              }}
            >
              {getHelperText("category")}
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid size={12} alignContent="center">
          <FormLabel>Payment mode</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              label={PAYMENT_MODE_LABEL.cash}
              control={
                <Radio
                  name="payment_mode"
                  value="cash"
                  checked={formData.payment_mode === "cash"}
                  onChange={handleFormChange}
                />
              }
            />
            <FormControlLabel
              label={PAYMENT_MODE_LABEL.online}
              control={
                <Radio
                  name="payment_mode"
                  value="online"
                  checked={formData.payment_mode === "online"}
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
            minRows={2}
            maxRows={3}
            label="Note"
            name="note"
            value={formData.note}
            onChange={handleFormChange}
            helperText={getHelperText("note")}
            error={formError?.note?.hasError}
            onInput={validateFormField}
          />
        </Grid>
      </Grid>

      {updateCategory.showModal && (
        <UpdateCategory
          updateCategory={updateCategory}
          setUpdateCategory={setUpdateCategory}
        />
      )}
    </>
  );
}

export default TransactionForm;
