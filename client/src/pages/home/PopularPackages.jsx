import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { popularBadge } from "../../assets/index";

const PopularPackages = () => {
  const packages = [
    {
      title: "Silver",
      price: 800,
      speed: 15,
      otc: "3000 Taka",
      support: "24/7 Customer Care",
    },
    {
      title: "Gold",
      price: 1000,
      speed: 25,
      otc: "3000 Taka",
      support: "24/7 Customer Care",
    },
    {
      title: "Platinum",
      price: 1500,
      speed: 45,
      otc: "3000 Taka",
      support: "24/7 Customer Care",
    },
  ];

  // create a boolean array for toggles
  const [openStates, setOpenStates] = useState(packages.map(() => true));

  const toggleCard = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="px-4 md:px-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Most Popular Packages
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl border border-gray-200 relative h-fit"
          >
            <img
              src={popularBadge}
              alt=""
              srcset=""
              className="absolute top-0 right-0"
            />
            <section className="p-6">
              <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>

              <div className="flex items-center justify-between mb-3 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">Speed</p>
                  <p className="text-3xl font-bold">{pkg.speed} Mbps</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{pkg.price}৳</p>
                  <p className="text-gray-500 text-xs">Per Month</p>
                </div>
              </div>

              <button
                onClick={() => toggleCard(index)}
                className="flex items-center gap-2 mx-auto bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm mb-4 transition-all duration-300 cursor-pointer"
              >
                {openStates[index] ? "Hide Details" : "Show Details"}
                {openStates[index] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openStates[index]
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>24 HOURS UNLIMITED</li>
                  <li>Fiber Optics</li>
                  <li>OTC Fee – {pkg.otc}</li>
                  <li>{pkg.support}</li>
                </ul>
              </div>

              <button className="mt-5 w-full bg-[#0E4F9D] hover:bg-blue-700 text-white font-semibold py-2 rounded-full">
                Contact US
              </button>
            </section>
          </div>
        ))}
      </div>
      <Link to="packages">
        <p className="px-5 py-2 text-md text-slate-700 rounded-4xl font-semibold hover:bg-blue-700 hover:text-white border border-blue-700 cursor-pointer w-fit mx-auto mt-10">
          View All Packages
        </p>
      </Link>
    </section>
  );
};

export default PopularPackages;
