import { useSelector } from "react-redux";
import "./App.scss";
import AppRouter from "./routes/AppRouter";
import useLocalStorageSync from "./hooks/useLocalStorageSync";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./themeConfig";

function App() {
  //Sync transactions in localStorage
  const transactions = useSelector((store: any) => store.transactions);
  const categories = useSelector((store: any) => store.categories);

  useLocalStorageSync({ transactions });
  useLocalStorageSync({ categories });

  // Theme toggle
  const darkMode = useSelector((store: any) => store.theme);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
