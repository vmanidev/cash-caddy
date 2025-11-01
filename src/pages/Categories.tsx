import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../store/types";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import UpdateCategory from "../features/category-management/UpdateCategory";
import type { UpdateCategoryStateProps } from "../models/categories";
import { initialCategoryData } from "../constants/form";
import { deleteCategory } from "../store/features/categorySlice";

function Categories() {
  const [updateCategory, setUpdateCategory] =
    useState<UpdateCategoryStateProps>({
      formData: initialCategoryData,
      showModal: false,
    });

  const categories = useSelector((state: any) => state.categories);

  const dispatch = useDispatch();

  const editCategoryItem = (
    name: IncomeExpensesItem,
    type: "income" | "expenses"
  ) => {
    setUpdateCategory({ formData: { name, type }, showModal: true });
  };

  const Categories = (type: "income" | "expenses") => {
    return (
      <>
        <Typography variant="h6">
          {type === "income" ? "Income" : "Expense"} Categories
        </Typography>
        <List sx={{ maxHeight: "300px", overflow: "scroll" }}>
          {categories[type].map((item: IncomeExpensesItem) => {
            return (
              <ListItem
                key={item.key}
                secondaryAction={
                  <ButtonGroup variant="text">
                    <Button onClick={() => editCategoryItem(item, type)}>
                      <Edit fontSize="small" />
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(deleteCategory({ name: item, type }))
                      }
                    >
                      <Delete color="error" fontSize="small" />
                    </Button>
                  </ButtonGroup>
                }
              >
                <ListItemText>{item.value}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </>
    );
  };

  return (
    <>
      {updateCategory.showModal && (
        <UpdateCategory
          updateCategory={updateCategory}
          setUpdateCategory={setUpdateCategory}
        />
      )}
      <Grid container spacing={2} margin={2} size={12}>
        <Grid size={12}>
          <AppHeader />
        </Grid>
        <Typography variant="body1">
          Add, rename, or remove categories to keep your wallet life under
          control.
        </Typography>
        <Grid size={12}>
          <Button variant="outlined">Add New Category</Button>
          <Grid container size={12} marginTop={2} spacing={4}>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              {categories.income.length > 0 && Categories("income")}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
              {categories.expenses.length > 0 && Categories("expenses")}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <AppFooter />
        </Grid>
      </Grid>
    </>
  );
}

export default Categories;
