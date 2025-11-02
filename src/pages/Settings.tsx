import { Grid, Typography } from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";

function Settings() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1">Settings</Typography>
      <Grid size={12}>Settings Page</Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Settings;
