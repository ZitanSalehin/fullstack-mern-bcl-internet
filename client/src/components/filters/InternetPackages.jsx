import { useState } from "react";

export default function InternetPackages() {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [speedRange, setSpeedRange] = useState([0, 200]);

  const packages = [
    {
      name: "Bronze",
      price: 500,
      speed: 5,
      unlimited: true,
      fiberOptic: true,
      otc: "2400 Taka",
      support: true,
      color: "bg-gradient-to-br from-red-400 to-red-600",
    },
    {
      name: "Silver",
      price: 800,
      speed: 10,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-red-500 to-red-700",
    },
    {
      name: "Gold I",
      price: 1000,
      speed: 25,
      unlimited: true,
      fiberOptic: true,
      otc: "2400 Taka",
      support: true,
      color: "bg-gradient-to-br from-red-600 to-red-800",
    },
    {
      name: "Gold II",
      price: 1200,
      speed: 30,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
      color: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      name: "Gold III",
      price: 1500,
      speed: 40,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
      color: "bg-gradient-to-br from-green-700 to-green-900",
    },
    {
      name: "Platinum I",
      price: 2000,
      speed: 50,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
      color: "bg-gradient-to-br from-green-800 to-green-950",
    },
    {
      name: "Platinum II",
      price: 2500,
      speed: 75,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      name: "Diamond I",
      price: 3000,
      speed: 90,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-teal-700 to-teal-900",
    },
    {
      name: "Diamond II",
      price: 3500,
      speed: 100,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-teal-800 to-teal-950",
    },
    {
      name: "Crown I",
      price: 4000,
      speed: 125,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
    {
      name: "Crown II",
      price: 4500,
      speed: 150,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-purple-700 to-purple-900",
    },
    {
      name: "Crown III",
      price: 5000,
      speed: 200,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
      color: "bg-gradient-to-br from-purple-800 to-purple-950",
    },
  ];

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.price >= priceRange[0] &&
      pkg.price <= priceRange[1] &&
      pkg.speed >= speedRange[0] &&
      pkg.speed <= speedRange[1]
  );

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-2">
            BCL INTERNET PACKAGES
          </h1>
          <p className="text-center text-gray-600 text-sm">
            Super Speed Optical Fiber Internet Connectivity with Real IP Right
            to Your Door Steps
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Price Range: {priceRange[0]}৳ - {priceRange[1]}৳
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Speed Range: {speedRange[0]} Mbps - {speedRange[1]} Mbps
              </label>
              <input
                type="range"
                min="0"
                max="200"
                step="5"
                value={speedRange[1]}
                onChange={(e) => setSpeedRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <div className={`${pkg.color} text-white p-6 pb-8`}>
                <h3 className="text-center text-lg font-semibold mb-3">
                  {pkg.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold">{pkg.price}৳</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p>✓ {pkg.speed} Mbps</p>
                  <p>✓ 24 HOURS UNLIMITED</p>
                  <p>✓ Fiber Optics</p>
                  <p>✓ OTC Tax - {pkg.otc}</p>
                  <p>✓ 24/7 Customer Care</p>
                </div>
                <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition">
                  CONTACT US
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
