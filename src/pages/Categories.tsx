import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import type { IncomeExpensesItem } from "../store/types";
import {
  DeleteOutlineOutlined,
  EditOutlined,
  Warning,
} from "@mui/icons-material";
import { Fragment, useState } from "react";
import UpdateCategory from "../features/category-management/UpdateCategory";
import type {
  DeleteCategoryModalProps,
  UpdateCategoryStateProps,
} from "../models/categories";
import { initialCategoryData } from "../constants/form";
import { deleteCategory } from "../store/features/categorySlice";
import AppModal from "../components/ui/modal/Modal";
import type { TransactionFormData, TransactionType } from "../models/form";

function Categories() {
  const [updateCategory, setUpdateCategory] =
    useState<UpdateCategoryStateProps>({
      formData: initialCategoryData,
      editMode: false,
      showModal: false,
    });

  const [deleteModal, setDeleteModal] = useState<DeleteCategoryModalProps>({
    formData: initialCategoryData,
    showModal: false,
  });

  const categories = useSelector((state: any) => state.categories);
  const transactions = useSelector((state: any) => state.transactions);

  const dispatch = useDispatch();

  const editCategoryItem = (
    name: IncomeExpensesItem,
    type: "income" | "expenses"
  ) => {
    setUpdateCategory({
      formData: { name, type },
      editMode: true,
      showModal: true,
    });
  };

  const addNewCategory = () => {
    setUpdateCategory({
      formData: initialCategoryData,
      editMode: false,
      showModal: true,
    });
  };

  const deleteCategoryItem = (
    name: IncomeExpensesItem,
    type: TransactionType
  ) => {
    const categoriesLinkedToTransactions: string[] = transactions.map(
      (record: TransactionFormData) => record.category
    );
    if (categoriesLinkedToTransactions.includes(name.key)) {
      setDeleteModal({ formData: { name, type }, showModal: true });
    } else {
      dispatch(deleteCategory({ name, type }));
    }
  };

  const removeCategory = () => {
    dispatch(deleteCategory(deleteModal.formData));
    setDeleteModal({ formData: initialCategoryData, showModal: false });
  };

  const Categories = (type: "income" | "expenses") => {
    return (
      <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
        <Typography variant="h6">
          {type === "income" ? "Income" : "Expense"} Categories
        </Typography>
        <Paper elevation={4}>
          <List sx={{ maxHeight: "300px", overflow: "scroll" }}>
            {categories[type].map((item: IncomeExpensesItem, index: number) => {
              return (
                <Fragment key={item.key}>
                  <ListItem
                    secondaryAction={
                      <ButtonGroup variant="text">
                        <Button onClick={() => editCategoryItem(item, type)}>
                          <EditOutlined fontSize="small" />
                        </Button>
                        <Button onClick={() => deleteCategoryItem(item, type)}>
                          <DeleteOutlineOutlined
                            color="error"
                            fontSize="small"
                          />
                        </Button>
                      </ButtonGroup>
                    }
                  >
                    <ListItemText>{item.value}</ListItemText>
                  </ListItem>
                  {index !== categories[type].length - 1 && (
                    <Divider component="li" />
                  )}
                </Fragment>
              );
            })}
          </List>
        </Paper>
      </Grid>
    );
  };

  return (
    <>
      {deleteModal.showModal && (
        <AppModal
          title={
            <Stack direction="row" gap={1} alignItems="center">
              <Warning fontSize="small" color="warning" />
              <span>Delete Category</span>
            </Stack>
          }
          content={
            <Grid>
              <Typography variant="body1">
                <Typography variant="button" color="info">
                  {deleteModal.formData.name.value}
                </Typography>{" "}
                category is linked to existing transactions. Are you sure you
                want to delete it?
              </Typography>
            </Grid>
          }
          actionButtons={
            <>
              <Button
                variant="contained"
                color="error"
                onClick={removeCategory}
              >
                <DeleteOutlineOutlined /> Delete
              </Button>
              <Button
                variant="outlined"
                onClick={() =>
                  setDeleteModal({
                    formData: initialCategoryData,
                    showModal: false,
                  })
                }
              >
                Cancel
              </Button>
            </>
          }
        />
      )}

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
        <Typography variant="body1" className="page-description">
          Easily create, rename, or delete categories to better organize your
          spending and budgeting habits.
        </Typography>
        <Grid size={12}>
          <Button variant="outlined" onClick={addNewCategory}>
            Add New Category
          </Button>
          <Grid container size={12} marginTop={2} spacing={4}>
            {categories.income.length > 0 && Categories("income")}
            {categories.expenses.length > 0 && Categories("expenses")}
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
