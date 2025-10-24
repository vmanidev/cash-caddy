import { Box, Drawer } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: (prev: boolean) => void;
  children: ReactNode;
}

function AppDrawer({ openDrawer, setOpenDrawer, children }: Props) {
  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={onClose}>
      <Box role="presentation">{children}</Box>
    </Drawer>
  );
}

export default AppDrawer;
