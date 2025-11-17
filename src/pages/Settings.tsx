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
  Contrast,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { savePreferredMode } from "../store/features/themeSlice";
import { useState } from "react";
import CreateBudget from "../features/budget-settings/CreateBudget";

function Settings() {
  const mode = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();

  const [createBudgetModal, setCreateBudgetModal] = useState(false);

  const ModeSettings = () => {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <Contrast />
          </Avatar>
        </ListItemAvatar>

        <Grid size={12} container>
          <Grid size={{ xs: 12, sm: 10, md: 10, lg: 10, xl: 10 }}>
            <ListItemText
              primary="Theme Settings"
              secondary="Save your theme preferrence"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}>
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
          <Grid size={{ xs: 12, sm: 10, md: 10, lg: 10, xl: 10 }}>
            <ListItemText
              primary="Budget Settings"
              secondary="Create new or modify your existing budgets."
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 2, md: 2, lg: 2, xl: 2 }}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button onClick={() => setCreateBudgetModal(true)}>Create</Button>
              <Button onClick={() => setCreateBudgetModal(true)}>Modify</Button>
            </Stack>
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
        {createBudgetModal && (
          <CreateBudget setCreateBudgetModal={setCreateBudgetModal} />
        )}
        <List>
          <ModeSettings />
          <Divider component="li" />
          <BudgetSettings />
        </List>
      </Grid>

      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Settings;
