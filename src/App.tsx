import { useSelector } from "react-redux";
import "./App.scss";
import AppRouter from "./routes/AppRouter";
import useLocalStorageSync from "./hooks/useLocalStorageSync";

function App() {
  //Sync transactions in localStorage
  const transactions = useSelector((store: any) => store.transactions);
  const categories = useSelector((store: any) => store.categories);

  useLocalStorageSync({ transactions });
  useLocalStorageSync({ categories });

  return <AppRouter />;
}

export default App;
