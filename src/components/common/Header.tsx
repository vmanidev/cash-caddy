import { Menu } from "@mui/icons-material";
import { IconButton, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";

function AppHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header>
      <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid container size={12} spacing={2} alignItems="center">
        <IconButton
          onClick={() => setOpenDrawer(true)}
          sx={{ justifyContent: "flex-start", padding: 0 }}
          color="inherit"
        >
          <Menu fontSize="large" />
        </IconButton>
        <Typography variant="h4" fontWeight="700" className="income-text">
          CASH CADDY
        </Typography>
      </Grid>
    </header>
  );
}

export default AppHeader;
