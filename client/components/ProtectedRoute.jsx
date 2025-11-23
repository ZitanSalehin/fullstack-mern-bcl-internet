import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // 1️⃣ Try to read token & role from Redux
  const auth = useSelector((state) => state.auth);
  let token = auth.token;
  let role = auth.role;

  // 2️⃣ Fallback to cookies in case Redux is empty (refresh or local visitor)
  if (!token) token = Cookies.get("token");
  if (!role) role = Cookies.get("role");

  // 3️⃣ Only admin can access /dashboard
  if (!token || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  // 4️⃣ Admin logged in → allow access
  return children;
}
