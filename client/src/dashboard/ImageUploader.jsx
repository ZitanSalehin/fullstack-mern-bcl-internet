import axios from "axios";
import { useEffect, useState } from "react";

export default function ImageUploader() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  // Fetch all saved images
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/hero");
      setImages(res.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Upload new image
  const uploadImage = async () => {
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post("http://localhost:5000/api/hero/upload", formData);
      setFile(null);
      fetchImages();
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed");
    }
  };

  // Delete Image
  const deleteImage = async (id) => {
    await axios.delete(`http://localhost:5000/api/hero/${id}`);
    fetchImages();
  };

  return (
    <div className="p-6 border shadow-lg rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Hero Slider Image Manager</h2>

      {/* Upload Section */}
      <div className="mb-6">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-2"
        />
        <button
          onClick={uploadImage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload Image
        </button>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img._id} className="relative w-full h-64">
            <img
              src={`http://localhost:5000${img.url}`}
              className="w-full h-full object-cover rounded"
              alt="slider"
            />

            <button
              onClick={() => deleteImage(img._id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
