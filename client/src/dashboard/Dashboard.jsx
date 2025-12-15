import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/authSlice";
import ImageUploader from "./ImageUploader";
import PackagesAdmin from "./PackagesAdmin";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  const [active, setActive] = useState("image");

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    Cookies.remove("role");
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* -------- Sidebar / Topbar -------- */}
      <aside
        className="
      w-full lg:w-64
      shadow-lg p-4 lg:p-6 
      flex lg:flex-col items-center lg:items-start
      bg-white
      lg:h-screen
    "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-600 mb-4 lg:mb-8">
          Dashboard
        </h2>

        {/* Menu Container */}
        <div className="flex lg:flex-col gap-4 flex-1">
          {/* Image Uploader */}
          <button
            onClick={() => setActive("image")}
            className={`px-4 py-2 rounded-md font-medium whitespace-nowrap
          ${
            active === "image" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
          }`}
          >
            📁 Image Uploader
          </button>

          {/* Offer Limit */}
          <button
            onClick={() => setActive("packages")}
            className={`px-4 py-2 rounded-md font-medium whitespace-nowrap
          ${
            active === "packages"
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-100"
          }`}
          >
            🎁 Package Cards
          </button>
        </div>

        {/* Logout (Right in mobile, bottom in desktop) */}
        <button
          onClick={handleLogout}
          className="
        bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 
        mt-0 lg:mt-auto
      "
        >
          Logout
        </button>
      </aside>

      {/* -------- Main Content -------- */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, <span className="text-blue-600">{role}</span>
        </h1>

        {/* Conditional Pages */}
        {active === "image" && <ImageUploader />}

        {active === "packages" && <PackagesAdmin />}
      </main>
    </div>
  );
}
