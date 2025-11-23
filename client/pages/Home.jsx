import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Clear Redux state
    dispatch(logout());

    // 2️⃣ Clear cookies
    Cookies.remove("token");
    Cookies.remove("role");

    // 3️⃣ Redirect to home page
    navigate("/");
  };
  return (
    <>
      <h1 className="text-center mt-20 text-2xl">Welcome to Home Page</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </>
  );
}
