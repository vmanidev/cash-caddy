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
  actionButtons: ReactNode;
}

function AppModal({ title, content, actionButtons }: Props) {
  return (
    <Dialog open fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actionButtons}</DialogActions>
    </Dialog>
  );
}

export default AppModal;
