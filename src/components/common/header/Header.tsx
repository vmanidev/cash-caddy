import { Menu } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

function AppHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid container size={12} spacing={1} alignItems="center">
        <Button variant="text" onClick={() => setOpenDrawer(true)}>
          <Menu />
        </Button>
        <Typography variant="h4" fontWeight="700" className="income-text">
          CASH CADDY
        </Typography>
      </Grid>
    </>
  );
}

export default AppHeader;
