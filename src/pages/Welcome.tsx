import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardUser } from "../store/features/userSlice";
import { teal } from "@mui/material/colors";
import AppFooter from "../components/common/Footer";

function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onboardNewUser = () => {
    dispatch(onboardUser(true));
    navigate("/dashboard", { state: "app.dashboard" });
  };

  return (
    <Grid container size={12} spacing={3} textAlign="center" marginTop={5}>
      <Grid size={12}>
        <Typography variant="h3" color={teal[500]} sx={{ fontWeight: "bold" }}>
          CASH CADDY
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="body1" lineHeight={2} padding={2}>
          A personal finance app for tracking expenses, setting budgets, and
          achieving financial goals.
        </Typography>
      </Grid>
      <Grid size={12}>
        <Button variant="outlined" onClick={onboardNewUser}>
          Let's Begin
        </Button>
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default Welcome;
