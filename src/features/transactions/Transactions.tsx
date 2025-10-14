import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { transactionTableColumn } from "../../constants/table";

function Transactions() {
  return (
    <Paper elevation={4}>
      <Table stickyHeader aria-label="Transaction table">
        <TableHead>
          <TableRow>
            {transactionTableColumn.map(({ id, label }) => {
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
