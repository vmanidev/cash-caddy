import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  AccountBalanceWallet,
  Backup,
  Contrast,
  DarkMode,
  LightMode,
  Upload,
} from "@mui/icons-material";
import { savePreferredMode } from "../store/features/themeSlice";
import { useState } from "react";
import UpdateBudget from "../features/budget-settings/UpdateBudget";
import BudgetList from "../features/budget-settings/BudgetList";
import { initialBudgetData } from "../constants/form";
import type { UpdateBudgetStateProps } from "../models/budgets";

function Settings() {
  const mode = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();

  const [updateBudget, setUpdateBudget] = useState<UpdateBudgetStateProps>({
    formData: initialBudgetData,
    editMode: false,
    showModal: false,
  });

  const DataAndBackup = () => {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <Backup />
          </Avatar>
        </ListItemAvatar>

        <Grid size={12} container>
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 10, xl: 10 }}>
            <ListItemText
              primary="Data & Backup"
              secondary="Download your transaction data."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2, xl: 2 }}>
            <Button startIcon={<Upload />}>Export CSV</Button>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

  const ModeSettings = () => {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <Contrast />
          </Avatar>
        </ListItemAvatar>

        <Grid size={12} container>
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 10, xl: 10 }}>
            <ListItemText
              primary="Theme Settings"
              secondary="Save your theme preferrence."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2, xl: 2 }}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <IconButton
                onClick={() =>
                  dispatch(savePreferredMode({ enableDarkmode: false }))
                }
              >
                <LightMode
                  color={mode.preferredMode === "light" ? "warning" : "inherit"}
                />
              </IconButton>
              <IconButton
                onClick={() =>
                  dispatch(savePreferredMode({ enableDarkmode: true }))
                }
              >
                <DarkMode
                  color={mode.preferredMode === "dark" ? "primary" : "inherit"}
                />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

  const BudgetSettings = () => {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <AccountBalanceWallet />
          </Avatar>
        </ListItemAvatar>

        <Grid size={12} container>
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 10, xl: 10 }}>
            <ListItemText
              primary="Budget Settings"
              secondary="Create new or modify your existing budgets."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2, xl: 2 }}>
            <Button
              variant="text"
              onClick={() =>
                setUpdateBudget((prev) => ({ ...prev, showModal: true }))
              }
            >
              Create Budget
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    );
  };

  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>

      <Typography variant="body1" className="page-description">
        Personalize the app to fit your needs — adjust preferences, manage data
        options, and explore customization features.
      </Typography>

      <Grid size={12}>
        {updateBudget.showModal && (
          <UpdateBudget
            updateBudget={updateBudget}
            setUpdateBudget={setUpdateBudget}
          />
        )}
        <List>
          <DataAndBackup />
          <Divider component="li" />
          <ModeSettings />
          <Divider component="li" />
          <BudgetSettings />
          <BudgetList />
          <Divider component="li" />
        </List>
      </Grid>

      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Settings;
