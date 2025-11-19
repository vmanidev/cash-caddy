import { useDispatch, useSelector } from "react-redux";
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
  TableRow,
  Typography,
} from "@mui/material";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { formatLocaleCurrency } from "../../utils/currency";
import BudgetPieChart from "../../components/common/charts/BudgetPieChart";
import { deleteBudget } from "../../store/features/budgetSlice";
import type { UpdateBudgetStateProps } from "../../models/budgets";
import { initialBudgetData } from "../../constants/form";
import UpdateBudget from "./UpdateBudget";
import useBudgetUsage from "../../hooks/useBudgetUsage";
import { pink, teal } from "@mui/material/colors";

function BudgetList() {
  const [list, setList] = useState<BudgetPayload[]>([]);
  const [updateBudget, setUpdateBudget] = useState<UpdateBudgetStateProps>({
    formData: initialBudgetData,
    editMode: false,
    showModal: false,
  });

  const budgets = useSelector((store: any) => store.budgets);
  const categoryMap = useCategoryMap();
  const budgetUsage = useBudgetUsage();
  const dispatch = useDispatch();

  useEffect(() => {
    const list: any[] = Object.entries(budgets).map(([key, value]) => ({
      category: key,
      limit: value,
    }));
    setList(list);
  }, [budgets]);

  if (list.length < 1) return null;

  const editBudget = ({ category, limit }: BudgetPayload) => {
    const formData = {
      category,
      limit: limit.toString(),
    };
    setUpdateBudget({ formData, editMode: true, showModal: true });
  };

  return (
    <ListItem>
      <Grid container size={12} spacing={{ xs: 2, sm: 2 }}>
        {updateBudget.showModal && (
          <UpdateBudget
            updateBudget={updateBudget}
            setUpdateBudget={setUpdateBudget}
          />
        )}
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: "300px",
              overflow: "scroll",
              scrollbarGutter: "stable",
            }}
            elevation={4}
          >
            <Table>
              <TableBody>
                {list.map((item: BudgetPayload) => {
                  return (
                    <TableRow key={item.category}>
                      <TableCell>{categoryMap[item.category]}</TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          color={
                            budgetUsage[item.category] > item.limit
                              ? pink[500]
                              : teal[500]
                          }
                        >
                          Spent:{" "}
                          {budgetUsage[item.category]
                            ? formatLocaleCurrency(budgetUsage[item.category])
                            : 0}
                        </Typography>
                        <Typography variant="subtitle2">
                          Limit: {formatLocaleCurrency(item.limit)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <ButtonGroup variant="text">
                          <Button onClick={() => editBudget(item)}>
                            <EditOutlined />
                          </Button>
                          <Button onClick={() => dispatch(deleteBudget(item))}>
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
          <Paper elevation={4} sx={{ height: "100%", alignContent: "center" }}>
            <BudgetPieChart />
          </Paper>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default BudgetList;
