import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppDrawer from "../../ui/drawer/Drawer";
import { menuItems } from "../../../constants/sidebar";
import type { ReactNode } from "react";
import { Category, Dashboard, Receipt, Settings } from "@mui/icons-material";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: (prev: boolean) => void;
}

function Sidebar({ openDrawer, setOpenDrawer }: Props) {
  const SidebarMenu = () => {
    return (
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem key={item.key}>
              <ListItemButton>
                <ListItemIcon>{renderIcon(item.key)}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const renderIcon = (name: string) => {
    let Icon: ReactNode;
    switch (name) {
      case "dashboard":
        Icon = <Dashboard />;
        break;
      case "transactions":
        Icon = <Receipt />;
        break;
      case "categories":
        Icon = <Category />;
        break;
      case "settings":
        Icon = <Settings />;
        break;
    }
    return Icon;
  };

  return (
    <AppDrawer
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      children={<SidebarMenu />}
    />
  );
}

export default Sidebar;
