import { useSelector } from "react-redux";

export default function AdminPanel() {
  const { role } = useSelector((state) => state.auth);
  return <h1 className="text-center mt-20 text-2xl">Welcome {role} Panel</h1>;
}
