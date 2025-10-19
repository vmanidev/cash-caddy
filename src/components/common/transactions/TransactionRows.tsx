import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import type { Transaction } from "../../../store/types";

interface Props {
  count?: number;
}

function TransactionRows({ count }: Props) {
  const transactionData: Transaction[] = useSelector(
    (state: any) => state.transactions
  );

  return transactionData
    .slice(0, count)
    .map(({ id, date, amount, category, type, note }) => {
      return (
        <TableRow key={id} hover>
          <TableCell>{date}</TableCell>
          <TableCell>{note}</TableCell>
          <TableCell>{category}</TableCell>
          <TableCell
            className={type === "income" ? "income-text" : "expenses-text"}
          >
            {amount}
          </TableCell>
          <TableCell>
            <ButtonGroup variant="text">
              <Button>
                <Edit />
              </Button>
              <Button>
                <Delete color="error" />
              </Button>
            </ButtonGroup>
          </TableCell>
        </TableRow>
      );
    });
}

export default TransactionRows;
