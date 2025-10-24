import { Menu } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

function AppHeader() {
  return (
    <Grid container size={12} spacing={1} alignItems="center">
      <Menu />
      <Typography variant="h4" fontWeight="700" className="income-text">
        CASH CADDY
      </Typography>
    </Grid>
  );
}

export default AppHeader;
