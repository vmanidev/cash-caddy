import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Categories from "../pages/Categories";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default AppRouter;
