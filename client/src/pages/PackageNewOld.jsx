import { useState } from "react";

const PackageNewOld = () => {
  const packages = [
    {
      name: "Bronze",
      price: 500,
      speed: 5,
      unlimited: true,
      fiberOptic: true,
      otc: "2400 Taka",
      support: true,
    },
    {
      name: "Silver",
      price: 800,
      speed: 10,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Gold I",
      price: 1000,
      speed: 25,
      unlimited: true,
      fiberOptic: true,
      otc: "2400 Taka",
      support: true,
    },
    {
      name: "Gold II",
      price: 1200,
      speed: 30,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
    },
    {
      name: "Gold III",
      price: 1500,
      speed: 40,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
    },
    {
      name: "Platinum I",
      price: 2000,
      speed: 50,
      unlimited: true,
      fiberOptic: true,
      otc: "1800 Taka",
      support: true,
    },
    {
      name: "Platinum II",
      price: 2500,
      speed: 75,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Diamond I",
      price: 3000,
      speed: 90,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Diamond II",
      price: 3500,
      speed: 100,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Crown I",
      price: 4000,
      speed: 125,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Crown II",
      price: 4500,
      speed: 150,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
    {
      name: "Crown III",
      price: 5000,
      speed: 200,
      unlimited: true,
      fiberOptic: true,
      otc: "3000 Taka",
      support: true,
    },
  ];

  // For now, we just show all packages. Later, you can filter based on price/speed sliders.
  const [filteredPackages, setFilteredPackages] = useState(packages);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-2xl shadow-lg flex flex-col gap-2 bg-white"
            >
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p>Price: {pkg.price} BDT</p>
              <p>Speed: {pkg.speed} Mbps</p>
              <p>OTC: {pkg.otc}</p>
              <p>Unlimited: {pkg.unlimited ? "Yes" : "No"}</p>
              <p>Fiber Optic: {pkg.fiberOptic ? "Yes" : "No"}</p>
              <p>Support: {pkg.support ? "Yes" : "No"}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            No packages found in this range.
          </p>
        )}
      </div>
    </div>
  );
};

export default PackageNewOld;
