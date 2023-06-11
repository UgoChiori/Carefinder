import { Route, Navigate, RouteProps, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

type PrivateRouteProps = RouteProps

export default function PrivateRoute(props: PrivateRouteProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    return <Route {...props} />;
  } else {
    navigate("/signin"); // Redirect to the sign-in page
    return <Navigate to="/signin" />;
  }
}