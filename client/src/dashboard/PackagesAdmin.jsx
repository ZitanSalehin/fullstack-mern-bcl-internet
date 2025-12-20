import axios from "axios";
import { useEffect, useState } from "react";

export default function PackagesAdmin() {
  const [form, setForm] = useState({
    title: "",
    speed: "",
    price: "",
    privileges: "",
  });

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const [errors, setErrors] = useState({
    title: "",
    speed: "",
    price: "",
    privileges: "",
  });

  /* ================= FETCH ================= */
  const fetchPackages = async () => {
    try {
      const res = await axios.get("https://bclonline.net/api/packages");
      setPackages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  /* ================= VALIDATION ================= */
  const validate = () => {
    let isValid = true;
    const newErrors = {
      title: "",
      speed: "",
      price: "",
      privileges: "",
    };

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    if (form.speed === "" || form.speed < 10 || form.speed > 450) {
      newErrors.speed = "Speed must be between 10 and 450 Mbps";
      isValid = false;
    }

    if (form.price === "" || form.price < 500 || form.price > 10000) {
      newErrors.price = "Price must be between 500 and 10000 BDT";
      isValid = false;
    }

    if (!form.privileges.trim()) {
      newErrors.privileges = "At least one privilege is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Trim title and privileges
    const trimmedTitle = form.title.trim().replace(/\s+/g, " "); // replace multiple spaces with single
    const privilegesArray = form.privileges
      .split("\n")
      .map((line) => line.trim()) // trim each line
      .filter(Boolean); // remove empty lines

    try {
      if (editId) {
        await axios.put(`https://bclonline.net/api/packages/${editId}`, {
          title: trimmedTitle,
          speed: Number(form.speed),
          price: Number(form.price),
          privileges: privilegesArray,
        });
        setEditId(null);
      } else {
        await axios.post("https://bclonline.net/api/packages", {
          title: trimmedTitle,
          speed: Number(form.speed),
          price: Number(form.price),
          privileges: privilegesArray,
        });
      }

      // Reset form
      setForm({
        title: "",
        speed: "",
        price: "",
        privileges: "",
      });

      fetchPackages();
    } catch (err) {
      console.error("Error submitting package:", err);
    }

    setLoading(false);
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this package?")) return;

    try {
      await axios.delete(`https://bclonline.net/api/packages/${id}`);
      fetchPackages();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (pkg) => {
    setForm({
      title: pkg.title,
      speed: pkg.speed,
      price: pkg.price,
      privileges: pkg.privileges?.join("\n") || "",
    });

    setEditId(pkg._id);
    setErrors({ title: "", speed: "", price: "", privileges: "" });
  };

  /* ================= UI ================= */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Packages</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 mb-10">
        {/* TITLE */}
        <input
          type="text"
          placeholder="Package Title"
          className={`border rounded p-2 ${errors.title && "border-red-500"}`}
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value.replace(/[^A-Za-z\s]/g, ""),
            })
          }
        />

        {/* SPEED */}
        <input
          type="number"
          placeholder="Speed (10–450 Mbps)"
          className={`border rounded p-2 ${errors.speed && "border-red-500"}`}
          value={form.speed}
          onChange={(e) => setForm({ ...form, speed: e.target.value })}
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price (500–10000 BDT)"
          className={`border rounded p-2 ${errors.price && "border-red-500"}`}
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        {/* PRIVILEGES */}
        <textarea
          rows={5}
          placeholder="Privileges (one per line)"
          className={`border rounded p-2 md:col-span-3 h-[250px] ${
            errors.privileges && "border-red-500"
          }`}
          value={form.privileges}
          onChange={(e) => setForm({ ...form, privileges: e.target.value })}
        />

        {/* ERRORS */}
        <div className="md:col-span-3 space-y-1 text-red-500 text-sm">
          {errors.title && <p>{errors.title}</p>}
          {errors.speed && <p>{errors.speed}</p>}
          {errors.price && <p>{errors.price}</p>}
          {errors.privileges && <p>{errors.privileges}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded md:col-span-3"
        >
          {loading
            ? "Submitting..."
            : editId
            ? "Update Package"
            : "Create Package"}
        </button>
      </form>

      {/* PACKAGE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...packages]
          .sort((a, b) =>
            a.price !== b.price ? a.price - b.price : a.speed - b.speed
          )
          .map((item) => (
            <div key={item._id} className="border rounded-xl shadow p-6">
              <h3 className="font-bold text-xl">{item.title}</h3>

              <p className="mt-4 text-3xl font-bold">{item.speed} Mbps</p>
              <p className="text-lg mt-1">BDT {item.price}</p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
                {item.privileges?.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
