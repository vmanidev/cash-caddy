import { useSelector } from "react-redux";
import "./App.scss";
import AppRouter from "./routes/AppRouter";
import useLocalStorageSync from "./hooks/useLocalStorageSync";

function App() {
  //Sync transactions in localStorage
  const transactions = useSelector((store: any) => store.transactions);
  useLocalStorageSync({ transactions });

  return <AppRouter />;
}

export default App;
