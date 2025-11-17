import { useSelector } from "react-redux";
import type { BudgetPayload } from "../../store/types";
import useCategoryMap from "../../hooks/useCategoryMap";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { formatLocaleCurrency } from "../../utils/currency";
import BudgetPieChart from "../../components/common/charts/BudgetPieChart";

function BudgetList() {
  const [list, setList] = useState<BudgetPayload[]>([]);
  const budgets = useSelector((store: any) => store.budgets);
  const categoryMap = useCategoryMap();

  useEffect(() => {
    const list: any[] = Object.entries(budgets).map(([key, value]) => ({
      category: key,
      limit: value,
    }));
    setList(list);
  }, [budgets]);

  if (list.length < 1) return null;

  return (
    <ListItem>
      <Grid container size={12} spacing={{ xs: 2, sm: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: "300px",
              overflow: "scroll",
              scrollbarGutter: "stable",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Budget Limit
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Modify/Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((item: BudgetPayload) => {
                  return (
                    <TableRow key={item.category}>
                      <TableCell>{categoryMap[item.category]}</TableCell>
                      <TableCell>{formatLocaleCurrency(item.limit)}</TableCell>
                      <TableCell>
                        <ButtonGroup variant="text">
                          <Button>
                            <EditOutlined />
                          </Button>
                          <Button>
                            <DeleteOutlineOutlined color="error" />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <BudgetPieChart />
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default BudgetList;
