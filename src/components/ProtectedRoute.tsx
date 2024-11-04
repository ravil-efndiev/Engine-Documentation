import { PropsWithChildren } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: PropsWithChildren) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
