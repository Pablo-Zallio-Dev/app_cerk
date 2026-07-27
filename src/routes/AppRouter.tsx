import { Route, Routes } from "react-router-dom";
import Configuration from "../pages/configuration/Configuration";
import { ProtectedRoute } from "./ProtectedRoute";
import Welcome from "../pages/welcome/Welcome";
import { useCerkStore } from "../stores/cerk.store";

function AppRouter() {
  const hasStarted = useCerkStore(
    (state) => state.hasStarted
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          hasStarted ? (
            <ProtectedRoute />
          ) : (
            <Welcome />
          )
        }
      />

      <Route
        path="/configuration"
        element={<Configuration />}
      />
    </Routes>
  );
}

export default AppRouter;