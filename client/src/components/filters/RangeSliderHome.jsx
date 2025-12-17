import { ChevronDown, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RangeSliderHome() {
  const [price, setPrice] = useState([500, 1000]);
  const [speed, setSpeed] = useState([10, 50]);
  const [openPrice, setOpenPrice] = useState(false);
  const [openSpeed, setOpenSpeed] = useState(false);

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

  // Filter packages according to slider ranges
  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.price >= price[0] &&
      pkg.price <= price[1] &&
      pkg.speed >= speed[0] &&
      pkg.speed <= speed[1]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Price Slider */}
        <div
          className={`mx-auto rounded-2xl mt-2 ${
            openPrice ? "bg-[#FDF0E3] w-105 p-6" : "bg-[#F2F3F4] w-90 p-6"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-4">
            {/* Price Text */}
            <div className="text-2xl font-semibold w-full">
              <div className="flex justify-between items-center">
                <div className="text-[#00719c]">Price range:</div>
                <button
                  onClick={() => setOpenPrice(!openPrice)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00719c] text-white transition-colors duration-300 cursor-pointer"
                >
                  {openPrice ? <X size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              <div className="flex items-center pt-4 gap-2">
                <div className="text-gray-700 text-4xl">
                  {price[0]} - {price[1]}
                </div>{" "}
                <div className="text-gray-700">BDT</div>
              </div>
            </div>

            {/* Toggle Button */}
          </div>

          {/* Slider Wrapper */}
          <div
            className="overflow-hidden transition-all duration-300 px-4"
            style={{ height: openPrice ? "40px" : "0px" }} // only slider height changes
          >
            <Slider
              range
              min={500}
              max={5000}
              step={500}
              value={price}
              onChange={(val) => setPrice(val)}
              allowCross={false}
              trackStyle={[{ height: 12, backgroundColor: "#00719c" }]}
              railStyle={{ height: 12, backgroundColor: "lightgrey" }}
              handleStyle={[
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #00719c",
                },
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #00719c",
                },
              ]}
            />
          </div>
        </div>

        {/* Speed Slider */}
        <div
          className={`mx-auto rounded-2xl w-105 p-6 ${
            openSpeed ? "bg-[#FDF0E3]" : "bg-[#F2F3F4]"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-4">
            {/* Speed Label */}
            <div className="text-2xl font-semibold w-full">
              <div className="flex justify-between items-center">
                <div className="text-[#00719c]">Speed range:</div>
                <button
                  onClick={() => setOpenSpeed(!openSpeed)}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00719c] text-white transition-colors duration-300 cursor-pointer"
                >
                  {openSpeed ? <X size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>

              <div className="flex items-center pt-4 gap-2">
                <div className="text-gray-700 text-4xl">
                  {speed[0]} - {speed[1]}
                </div>
                <div className="text-gray-700">Mbps</div>
              </div>
            </div>
          </div>

          {/* Slider Wrapper */}
          <div
            className="overflow-hidden transition-all duration-300 px-4"
            style={{ height: openSpeed ? "40px" : "0px" }} // height expands when open
          >
            <Slider
              range
              min={10}
              max={100}
              step={10}
              value={speed}
              onChange={(val) => setSpeed(val)}
              allowCross={false}
              trackStyle={[{ height: 12, backgroundColor: "#047857" }]}
              railStyle={{ height: 12, backgroundColor: "lightgrey" }}
              handleStyle={[
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #047857",
                },
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #047857",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/* Display Filtered Packages */}
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
      <div className="flex justify-center mx-auto">
        <Link to="/packages">
          <button
            type="button"
            className="px-5 py-2 text-md text-slate-700 rounded-4xl font-semibold hover:bg-(--primary) hover:text-white border border-(--primary) cursor-pointer"
          >
            View Result
          </button>
        </Link>
      </div>
    </div>
  );
}
