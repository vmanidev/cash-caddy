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
import { useNavigate } from "react-router-dom";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: (prev: boolean) => void;
}

function Sidebar({ openDrawer, setOpenDrawer }: Props) {
  const navigate = useNavigate();

  const goto = (path: string, state: string) => {
    navigate(path, { state });
    setOpenDrawer(false);
  };

  const SidebarMenu = () => {
    return (
      <List>
        {menuItems.map(({ key, label, path, state }) => {
          return (
            <ListItem key={key}>
              <ListItemButton onClick={() => goto(path, state)}>
                <ListItemIcon>{renderIcon(key)}</ListItemIcon>
                <ListItemText primary={label} />
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
