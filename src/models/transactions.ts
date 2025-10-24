import type { FormData } from "./form";

export interface UpdateTransactionStateProps {
  formData?: FormData;
  showModal: boolean;
}

export interface DeleteTransactionModalProps {
  id: string;
  showModal: boolean;
}
