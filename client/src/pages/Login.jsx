import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";
// for logout
import Cookies from "js-cookie";
import { logout } from "../../store/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    const payload = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log("Payload being sent:", payload); // check in console

    const res = await dispatch(loginUser(payload));
    console.log("Login result:", res); // debug

    if (res.meta.requestStatus === "fulfilled") {
      const role = res.payload.role;
      if (role === "admin") navigate("/dashboard");
      else navigate("/");
    }
  };

  // for logout
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
    <div className="p-4 max-w-md mx-auto mt-20">
      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full mt-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2"
        onClick={handleLogin}
      >
        {loading ? "Loading..." : "Login"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="p-4">
        {/* logout btn */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
