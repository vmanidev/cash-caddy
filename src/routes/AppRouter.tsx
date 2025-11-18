import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import About from "../pages/About";
import Welcome from "../pages/Welcome";
import { useSelector } from "react-redux";
import type { UserPayload } from "../store/types";

function AppRouter() {
  const user: UserPayload = useSelector((state: any) => state.user);

  return (
    <Routes>
      {!user.newUser && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </>
      )}
      {user.newUser && <Route path="/" element={<Welcome />} />}
      <Route
        path="*"
        element={
          user.newUser ? (
            <Navigate to="/" replace />
          ) : (
            <Navigate to="/dashboard" replace />
          )
        }
      />
    </Routes>
  );
}

export default AppRouter;
