import { Menu } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

function AppHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Grid container size={12} alignItems="center">
        <Button
          variant="text"
          onClick={() => setOpenDrawer(true)}
          sx={{ justifyContent: "flex-start", padding: 0 }}
        >
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
