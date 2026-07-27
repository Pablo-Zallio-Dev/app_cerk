import { Navigate } from "react-router-dom";
import { useCerkStore } from "../stores/cerk.store";
import Home from "../pages/Home/Home";

export function ProtectedRoute() {
  const isConfigurationComplete = useCerkStore(
    (state) => state.isConfigurationComplete
  );

  if (!isConfigurationComplete()) {
    return <Navigate to="/configuration" replace />;
  }

  return <Home />;
}