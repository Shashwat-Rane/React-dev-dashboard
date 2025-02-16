// PrivateRoute.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
