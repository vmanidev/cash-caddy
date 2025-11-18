import { Backdrop, Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onboardUser } from "../store/features/userSlice";

function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onboardNewUser = () => {
    dispatch(onboardUser(true));
    navigate("/dashboard", { state: "app.dashboard" });
  };

  return (
    <Backdrop
      open
      sx={{
        color: "#fff",
        zIndex: 999,
        background: "#000",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography sx={{ fontWeight: "bold" }}>Hi, welcomes to</Typography>
          <Typography variant="h3" color="success" sx={{ fontWeight: "bold" }}>
            CASH CADDY
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1">
            A personal finance app for tracking expenses, setting budgets, and
            achieving financial goals.
          </Typography>
        </Grid>
        <Grid size={12}>
          <Button variant="outlined" onClick={onboardNewUser}>
            Let's Begin
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
}

export default Welcome;
