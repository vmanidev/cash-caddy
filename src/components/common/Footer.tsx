import { Copyright, GitHub } from "@mui/icons-material";
import { Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { GITHUB_REPO_URL } from "../../constants/urls";

function AppFooter() {
  return (
    <footer>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        marginTop={4}
      >
        <Grid display="flex" alignItems="center">
          <Copyright fontSize="small" />
          <Typography variant="button">{new Date().getFullYear()}</Typography>
        </Grid>
        <Typography variant="button">Cash Caddy</Typography>
        <Link
          href={GITHUB_REPO_URL}
          rel="noopener"
          target="_blank"
          color="inherit"
          sx={{ ":hover": { color: "#1976d2" } }}
        >
          <GitHub />
        </Link>
      </Stack>
    </footer>
  );
}

export default AppFooter;
