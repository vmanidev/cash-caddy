import type { TransactionFormData } from "./form";

export interface UpdateTransactionStateProps {
  formData?: TransactionFormData;
  editMode: boolean,
  showModal: boolean;
}

export interface DeleteTransactionModalProps {
  id: string;
  showModal: boolean;
}
