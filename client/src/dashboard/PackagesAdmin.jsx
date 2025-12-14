import axios from "axios";
import { useEffect, useState } from "react";

export default function PackagesAdmin() {
  const [form, setForm] = useState({ title: "", speed: "", price: "" });
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null); // ID of package being edited

  // Fetch packages
  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/packages");
      console.log("Fetched packages:", res.data);
      setPackages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        // UPDATE
        await axios.put(`http://localhost:5000/api/packages/${editId}`, {
          title: form.title,
          speed: Number(form.speed),
          price: Number(form.price),
        });
        setEditId(null); // reset edit mode
      } else {
        // CREATE
        await axios.post("http://localhost:5000/api/packages", {
          title: form.title,
          speed: Number(form.speed),
          price: Number(form.price),
        });
      }

      setForm({ title: "", speed: "", price: "" });
      fetchPackages();
    } catch (err) {
      console.error("Error submitting package:", err);
    }

    setLoading(false);
  };

  // Delete a package
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

  // Edit a package
  const handleEdit = (pkg) => {
    setForm({
      title: pkg.title,
      speed: pkg.speed,
      price: pkg.price,
    });
    setEditId(pkg._id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Packages</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Title"
          className="border rounded p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Speed (Mbps)"
          className="border rounded p-2"
          value={form.speed}
          onChange={(e) => setForm({ ...form, speed: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price (BDT)"
          className="border rounded p-2"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded md:col-span-3"
          disabled={loading}
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
          packages.map((item) => (
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
