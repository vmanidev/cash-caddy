import {
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AppHeader from "../components/common/Header";
import AppFooter from "../components/common/Footer";
import {
  AutoAwesome,
  CheckCircle,
  Lightbulb,
  OpenInNew,
} from "@mui/icons-material";
import { GITHUB_REPO_URL } from "../constants/urls";

function About() {
  return (
    <Grid container spacing={2} margin={2} size={12}>
      <Grid size={12}>
        <AppHeader />
      </Grid>
      <Typography variant="body1">
        This app is a personal finance tracker built for learning purposes. It
        helps you manage income, expenses, budgets, and categories — all from
        one place.
      </Typography>
      <Grid size={12}>
        <Typography variant="h6">
          <AutoAwesome fontSize="small" color="primary" /> Features
        </Typography>
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>
              Interactive dashboard to visualize income, expenses, and trends
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>Simple transaction management system</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>Customizable spending categories</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>User-friendly settings and preferences</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>
              Clean, modern, and mobile-responsive design
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>
              PWA (Progressive Web App) support for offline access and app-like
              experience
            </ListItemText>
          </ListItem>
        </List>

        <Stack direction="column">
          <Typography variant="h6">
            <Lightbulb fontSize="small" color="warning" /> Learn more
          </Typography>
          <Typography variant="body2">
            Want to explore the code or project details?{" "}
            <Link
              href={GITHUB_REPO_URL}
              rel="noopener"
              target="_blank"
              display="inline-flex"
            >
              Learn more on GitHub <OpenInNew fontSize="small" />
            </Link>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        <AppFooter />
      </Grid>
    </Grid>
  );
}

export default About;
