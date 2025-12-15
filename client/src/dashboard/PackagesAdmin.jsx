import axios from "axios";
import { useEffect, useState } from "react";

export default function PackagesAdmin() {
  const [form, setForm] = useState({ title: "", speed: "", price: "" });
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  // Validation errors
  const [errors, setErrors] = useState({ title: "", speed: "", price: "" });

  // Fetch packages
  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/packages");
      setPackages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Validate inputs
  const validate = () => {
    const newErrors = { title: "", speed: "", price: "" };
    let isValid = true;

    // Title: letters and spaces only
    if (!/^[A-Za-z\s]+$/.test(form.title)) {
      newErrors.title = "Title must contain letters only";
      isValid = false;
    }

    // Speed: 30–100
    if (form.speed === "" || form.speed < 30 || form.speed > 100) {
      newErrors.speed = "Speed must be between 30 and 100 Mbps";
      isValid = false;
    }

    // Price: 500–2000
    if (form.price === "" || form.price < 500 || form.price > 2000) {
      newErrors.price = "Price must be between 500 and 2000 BDT";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop if invalid
    setLoading(true);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/packages/${editId}`, {
          title: form.title,
          speed: Number(form.speed),
          price: Number(form.price),
        });
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/packages", {
          title: form.title,
          speed: Number(form.speed),
          price: Number(form.price),
        });
      }

      setForm({ title: "", speed: "", price: "" });
      setErrors({ title: "", speed: "", price: "" });
      fetchPackages();
    } catch (err) {
      console.error("Error submitting package:", err);
    }

    setLoading(false);
  };

  // Delete package
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;

    try {
      await axios.delete(`http://localhost:5000/api/packages/${id}`);
      fetchPackages();
    } catch (err) {
      console.error("Error deleting package:", err);
    }
  };

  // Edit package
  const handleEdit = (pkg) => {
    setForm({
      title: pkg.title,
      speed: pkg.speed,
      price: pkg.price,
    });
    setEditId(pkg._id);
    setErrors({ title: "", speed: "", price: "" });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Packages</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 mb-10">
        {/* TITLE — Letters only */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Title (letters only)"
            className={`border rounded p-2 ${
              errors.title ? "border-red-500" : ""
            }`}
            value={form.title}
            onChange={(e) => {
              const value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // remove numbers
              setForm({ ...form, title: value });
              if (!value) {
                setErrors((prev) => ({
                  ...prev,
                  title: "Title cannot be empty",
                }));
              } else {
                setErrors((prev) => ({ ...prev, title: "" }));
              }
            }}
            required
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1">{errors.title}</span>
          )}
        </div>

        {/* SPEED — 30 to 100 Mbps */}
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Speed (30–100 Mbps)"
            className={`border rounded p-2 ${
              errors.speed ? "border-red-500" : ""
            }`}
            value={form.speed}
            onChange={(e) => {
              const value = Number(e.target.value);
              setForm({ ...form, speed: e.target.value });
              if (value < 30 || value > 100 || isNaN(value)) {
                setErrors((prev) => ({
                  ...prev,
                  speed: "Speed must be between 30 and 100 Mbps",
                }));
              } else {
                setErrors((prev) => ({ ...prev, speed: "" }));
              }
            }}
            min={30}
            max={100}
            required
          />
          {errors.speed && (
            <span className="text-red-500 text-sm mt-1">{errors.speed}</span>
          )}
        </div>

        {/* PRICE — 500 to 2000 BDT */}
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Price (500–2000 BDT)"
            className={`border rounded p-2 ${
              errors.price ? "border-red-500" : ""
            }`}
            value={form.price}
            onChange={(e) => {
              const value = Number(e.target.value);
              setForm({ ...form, price: e.target.value });
              if (value < 500 || value > 2000 || isNaN(value)) {
                setErrors((prev) => ({
                  ...prev,
                  price: "Price must be between 500 and 2000 BDT",
                }));
              } else {
                setErrors((prev) => ({ ...prev, price: "" }));
              }
            }}
            min={500}
            max={2000}
            required
          />
          {errors.price && (
            <span className="text-red-500 text-sm mt-1">{errors.price}</span>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded md:col-span-3"
          disabled={loading || errors.title || errors.speed || errors.price}
        >
          {loading
            ? "Submitting..."
            : editId
            ? "Update Package"
            : "Create Package"}
        </button>
      </form>

      {/* PACKAGES DISPLAY */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(packages) && packages.length > 0 ? (
          [...packages]
            .sort((a, b) => {
              // Primary sort: price
              if (a.price !== b.price) {
                return a.price - b.price;
              }
              // Secondary sort: speed
              return a.speed - b.speed;
            })
            .map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-xl border border-gray-200 relative"
              >
                <section className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                  <div className="flex justify-between mt-8">
                    <div>
                      <p className="text-sm text-gray-600">Upto</p>
                      <p className="text-3xl font-bold">{item.speed} Mbps</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">BDT {item.price}</p>
                      <p className="text-xs text-gray-500">Per Month</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-full"
                    >
                      Delete
                    </button>
                  </div>
                </section>
              </div>
            ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No packages created yet.
          </p>
        )}
      </div>
    </div>
  );
}
