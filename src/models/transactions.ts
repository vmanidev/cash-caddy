import type { TransactionFormData } from "./form";

export interface UpdateTransactionStateProps {
  formData?: TransactionFormData;
  showModal: boolean;
}

export interface DeleteTransactionModalProps {
  id: string;
  showModal: boolean;
}
