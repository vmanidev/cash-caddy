import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode, LightMode } from "@mui/icons-material";
import { savePreferredMode } from "../store/features/themeSlice";
import { useState } from "react";
import CreateBudget from "../features/budget-settings/CreateBudget";

function Settings() {
  const mode = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();

  const [createBudgetModal, setCreateBudgetModal] = useState(false);

  return (
    <Grid container spacing={2} margin={2} size={12}>
      {createBudgetModal && <CreateBudget />}
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1" className="page-description">
        Personalize the app to fit your needs — adjust preferences, manage data
        options, and explore customization features.
      </Typography>
      <Grid container size={12} alignItems="center">
        <Typography variant="h6">Set preferred mode</Typography>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
            color: "text.secondary",
            "& svg": {
              m: 1,
            },
          }}
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
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton
            onClick={() =>
              dispatch(savePreferredMode({ enableDarkmode: true }))
            }
          >
            <DarkMode
              color={mode.preferredMode === "dark" ? "primary" : "inherit"}
            />
          </IconButton>
        </Box>
      </Grid>
      <Grid size={12}>
        <Typography>Budget Settings</Typography>
        <Button variant="outlined" onClick={() => setCreateBudgetModal(true)}>
          Create Budget
        </Button>
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Settings;
