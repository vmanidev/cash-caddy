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

  const IncomeCategories = () => {
    return (
      <>
        <Typography variant="h6">Income Categories</Typography>
        <List>
          {categories.income.map((item: IncomeExpensesItem) => {
            return (
              <ListItem
                key={item.key}
                secondaryAction={
                  <ButtonGroup variant="text">
                    <Button onClick={() => editCategoryItem(item, "income")}>
                      <Edit />
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch(deleteCategory({ name: item, type: "income" }))
                      }
                    >
                      <Delete color="error" />
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
        <Grid size={12} marginTop={2}>
          <Button variant="outlined">Add New Category</Button>
          <Grid size={12}>
            {categories.income.length > 0 && <IncomeCategories />}
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
