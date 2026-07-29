import { Route, Routes } from "react-router-dom";
import Configuration from "../pages/configuration/Configuration";
import { ProtectedRoute } from "./ProtectedRoute";
import Welcome from "../pages/welcome/Welcome";
import { useCerkStore } from "../stores/cerk.store";
import UseInstructions from "../pages/instructions/UseInstructions";

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
       <Route path="/instructions" element={<UseInstructions />} />
    </Routes>
  );
}

export default AppRouter;