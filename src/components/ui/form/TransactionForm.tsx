import type { TransactionFormData } from "../../../models/form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
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
import { useState } from "react";
import { initialCategoryData } from "../../../constants/form";
import type { UpdateCategoryStateProps } from "../../../models/categories";
import UpdateCategory from "../../../features/category-management/UpdateCategory";
import { useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../../../store/types";

interface Props {
  formData: TransactionFormData;
  setFormData: (prev: any) => void;
}

function TransactionForm({ formData, setFormData }: Props) {
  const [updateCategory, setUpdateCategory] =
    useState<UpdateCategoryStateProps>({
      formData: initialCategoryData,
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
      value === "addNewCategory"
        ? addNewCategory()
        : setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const addNewCategory = () => {
    setUpdateCategory({
      formData: { name: initialCategoryData.name, type: formData.type },
      showModal: true,
    });
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}
        paddingTop={0.5}
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
                textField: { fullWidth: true, helperText: "Pick a date" },
              }}
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
            helperText="Enter the amount (numbers only)"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleFormChange}
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
            <FormHelperText>Select a category</FormHelperText>
          </FormControl>
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
            minRows={2}
            label="Note"
            name="note"
            value={formData.note}
            onChange={handleFormChange}
            helperText="Add a note for this transaction"
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
