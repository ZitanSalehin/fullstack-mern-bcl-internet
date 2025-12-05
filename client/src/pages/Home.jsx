import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import HeroSlider from "../components/slider/HeroSlider";

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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      <HeroSlider />
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nisi ea
        officia non saepe architecto eligendi tempora vero neque fugiat ratione
        eum doloribus animi earum deserunt, nihil numquam repellendus rem, natus
        iure. Eaque qui amet doloribus corporis dolor recusandae nesciunt.
        Perspiciatis ea voluptas, repellat expedita temporibus excepturi
        necessitatibus architecto obcaecati, placeat voluptates aliquid. Quia
        itaque quam laboriosam ullam ut ex optio error quidem, nisi tempora
        vitae harum omnis repellat voluptas aspernatur aliquam sunt quo illo
        incidunt. Obcaecati quia laudantium saepe maiores aliquid molestias
        repellendus eum quis soluta quaerat, fuga nihil cum natus officiis
        voluptatibus iusto doloribus a debitis, aspernatur ipsum.
      </p>
    </div>
  );
}
