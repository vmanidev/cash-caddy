import { Copyright, GitHub } from "@mui/icons-material";
import { Divider, Grid, Link, Stack } from "@mui/material";

function AppFooter() {
  return (
    <footer>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Grid display="flex" alignItems="center">
          <Copyright fontSize="small" />
          <span>{new Date().getFullYear()}</span>
        </Grid>
        <span>Cash Caddy</span>
        <Link
          href="https://github.com/vmanidev/cash-caddy/blob/c16ad3aa276ab3f25fd16f6ec058ef723c35be92/LICENSE"
          rel="noopener"
          target="_blank"
        >
          MIT License
        </Link>
        <Link
          href="https://github.com/vmanidev/cash-caddy"
          rel="noopener"
          target="_blank"
        >
          <GitHub />
        </Link>
      </Stack>
    </footer>
  );
}

export default AppFooter;
