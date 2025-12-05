import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  // 1️⃣ Get auth from Redux
  const { token: reduxToken, role: reduxRole } = useSelector(
    (state) => state.auth
  );

  // 2️⃣ Fallback to cookies
  const token = reduxToken || Cookies.get("token");
  const role = reduxRole || Cookies.get("role");

  // 3️⃣ Immediately redirect if not logged in or not admin
  if (!token || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  // 4️⃣ Admin → render children
  return children;
}
