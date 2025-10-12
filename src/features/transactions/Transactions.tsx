import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import type { TransactionTableColumn } from "../../models/table";

function Transactions() {
  const tableColumn: TransactionTableColumn[] = [
    {
      id: "date",
      label: "Date",
    },
    {
      id: "note",
      label: "Note",
    },
    {
      id: "category",
      label: "Category",
    },
    {
      id: "amount",
      label: "Amount",
    },
  ];

  return (
    <Paper elevation={2}>
      <Table stickyHeader aria-label="Transaction table">
        <TableHead>
          <TableRow>
            {tableColumn.map(({ id, label }) => {
              return <TableCell id={id}>{label}</TableCell>;
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow hover>
            {/* mock data */}
            <TableCell>Oct 10, 2025</TableCell>
            <TableCell>Paid to Chaat Shop</TableCell>
            <TableCell>Food & Beverages</TableCell>
            <TableCell>Rs. 200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Transactions;
