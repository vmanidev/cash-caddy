import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
  actions: ReactNode;
}

function AppModal({ title, content, actions }: Props) {
  return (
    <Dialog open>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}

export default AppModal;
