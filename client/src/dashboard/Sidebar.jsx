import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";

export default function Sidebar({ active, setActive, role }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    Cookies.remove("role");
    navigate("/");
  };

  return (
    <aside className="w-64 shadow-lg p-6 flex flex-col h-screen">
      {/* Dashboard Title */}
      <h2 className="text-2xl font-bold text-blue-600 mb-8">
        {role} Dashboard
      </h2>

      {/* Menu Items */}
      <button
        onClick={() => setActive("image")}
        className={`text-left px-4 py-2 rounded-md mb-2 font-medium ${
          active === "image" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
        }`}
      >
        📁 Image Uploader
      </button>

      <button
        onClick={() => setActive("offer")}
        className={`text-left px-4 py-2 rounded-md mb-2 font-medium ${
          active === "offer" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
        }`}
      >
        🎁 Offer Limit
      </button>

      {/* Spacer pushes logout to bottom */}
      <div className="flex-1"></div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
}
