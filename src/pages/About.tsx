import { Grid, Typography } from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";

function About() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1">About</Typography>
      <Grid size={12}>About Page</Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default About;
