import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/authSlice";
import ImageUploader from "./ImageUploader";

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
    <div className="flex h-screen bg-gray-100">
      {/* -------- Sidebar (Inside Dashboard) -------- */}
      <aside className="w-64 shadow-lg p-6 flex flex-col h-screen">
        {/* Dashboard Title */}
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h2>

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

        {/* Push logout bottom */}
        <div className="flex-1"></div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, <span className="text-blue-600">{role}</span>
        </h1>

        {/* Conditional Pages */}
        {active === "image" && <ImageUploader />}

        {active === "offer" && (
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Offer Limit Settings</h2>

            <label className="block mb-2 font-medium">Set Offer Limit</label>
            <input
              type="number"
              className="border p-2 rounded w-full mb-4"
              placeholder="Enter offer limit…"
            />

            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Save Offer Limit
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
