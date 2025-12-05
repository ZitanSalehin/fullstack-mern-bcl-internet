import { ChevronDown, ChevronUp, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { popularBadge, router } from "../assets/index";
import ConnectionSupport from "../pages/home/ConnectionSupport";

const packagesData = [
  {
    title: "SmartShop Pack",
    speed: 40,
    price: 899,
    popular: true,
    privileges: [
      "Bufferless YouTube & Facebook",
      "High Speed BDIX",
      "24/7 Customer Service",
      "Bufferless HD, FHD Video",
      "Stable & Secure Connectivity for Your Shop",
      "Reliable speed for POS, CCTV, and daily operations",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Surfer Plus",
    speed: 50,
    price: 1050,
    popular: true,
    privileges: [
      "Bufferless YouTube & Facebook",
      "High Speed BDIX",
      "24/7 Customer Service",
      "Bufferless HD, FHD 4K Video",
      "Bufferless Netflix, Bigo, TikTok, Imo, Likee",
      "Popular Games as Optimal Latency for users",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Cheetah Prime",
    speed: 60,
    price: 1275,
    popular: true,
    privileges: [
      "Bufferless Facebook, YouTube & Live Streaming",
      "High Speed BDIX",
      "24/7 Customer Service",
      "Bufferless HD, FHD, 4K Video",
      "Popular Games as Optimal Latency for users",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Group Student Pack",
    speed: 70,
    price: 1375,
    popular: true,
    privileges: [
      "Bufferless Facebook, YouTube & Live Streaming",
      "Bufferless HD, FHD, 4K Video",
      "High Speed BDIX",
      "Perfect for multiple users and connected devices",
      "Popular Games as Optimal Latency for 4 users",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Gamers",
    speed: 75,
    price: 1475,
    popular: true,
    privileges: [
      "Bufferless 4K Streaming",
      "Optimized Routing for Gaming",
      "Stable Ping, Low Latency",
      "Lightening Fast BDIX Connectivity",
      "Dedicated Gaming Cache Servers",
      "Quick Link: Reduced Server Time",
      "24/7 Customer Service",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Eagle Advance",
    speed: 80,
    price: 1700,
    popular: true,
    privileges: [
      "Bufferless Facebook, YouTube, Live Streaming, Zoom & Teams",
      "Bufferless QHD, FHD 4K Video",
      "High Speed BDIX",
      "Popular Games as Optimal Latency for users",
      "24/7 Customer Service",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Hawk Lite",
    speed: 85,
    price: 1800,
    popular: true,
    privileges: [
      "Bufferless Facebook, YouTube, Live Streaming, Zoom & Teams",
      "Bufferless Netflix & Prime Video",
      "Bufferless QHD, FHD 4K Video",
      "High Speed BDIX",
      "24/7 Customer Service",
      "Popular Games as Optimal Latency for users",
      "Package Downgrade Charge Applicable",
    ],
  },
  {
    title: "Hawk Advance",
    speed: 90,
    price: 1900,
    popular: true,
    privileges: [
      "Bufferless Facebook, YouTube, Live Streaming, Zoom & Teams",
      "Bufferless QHD, FHD 4K Video",
      "Bufferless Netflix & Prime Video",
      "High Speed BDIX",
      "24/7 Customer Service",
      "Popular Games as Optimal Latency for 6 users",
      "Package Downgrade Charge Applicable",
    ],
  },
];

export default function PackageCards() {
  const [searchParams] = useSearchParams();

  // Get initial values from URL params or fallback defaults
  const initialPrice = [
    Number(searchParams.get("minPrice")) || 500,
    Number(searchParams.get("maxPrice")) || 1500,
  ];
  const initialSpeed = [
    Number(searchParams.get("minSpeed")) || 30,
    Number(searchParams.get("maxSpeed")) || 100,
  ];

  const [price, setPrice] = useState(initialPrice);
  const [speed, setSpeed] = useState(initialSpeed);

  const [openPrice, setOpenPrice] = useState(true);
  const [openSpeed, setOpenSpeed] = useState(true);

  // Filter packages according to current price and speed
  const filteredPackages = useMemo(
    () =>
      packagesData.filter(
        (pkg) =>
          pkg.price >= price[0] &&
          pkg.price <= price[1] &&
          pkg.speed >= speed[0] &&
          pkg.speed <= speed[1]
      ),
    [price, speed]
  );

  // Update sliders if URL params change
  useEffect(() => {
    setPrice(initialPrice);
    setSpeed(initialSpeed);
  }, [searchParams]);

  return (
    <section className="py-10 px-4 md:px-0 bg-gray-50">
      <h1 className="text-center text-4xl font-semibold nato pb-10">
        Home Internet <span className="text-[#0E4F9D]">Packages</span>
      </h1>

      {/* Filter Sliders */}
      <div className="container mx-auto lg:px-32 flex flex-col md:flex-row gap-6 mb-8">
        {/* ---------------- PRICE FILTER ---------------- */}
        <div
          className={`mx-auto rounded-2xl h-fit ${
            openPrice
              ? "bg-[#FDF0E3] w-[90vw] lg:w-105 p-6"
              : "bg-[#F2F3F4] w-[80vw] lg:w-90 p-6"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-semibold w-full">
              <div className="flex justify-between items-center">
                <div className="text-[#0E4F9D]">Price range:</div>

                <button
                  onClick={() => setOpenPrice(!openPrice)}
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0E4F9D] text-white transition-colors duration-300 cursor-pointer"
                >
                  {openPrice ? <X size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>

              <div className="flex items-center pt-4 gap-2">
                <div className="text-gray-700 text-3xl lg:text-4xl">
                  {price[0]} - {price[1]}
                </div>
                <div className="text-gray-700">BDT</div>
              </div>
            </div>
          </div>

          <div
            className="overflow-hidden transition-all duration-300 px-4"
            style={{ height: openPrice ? "40px" : "0px" }}
          >
            <Slider
              range
              min={500}
              max={2000}
              step={50}
              value={price}
              onChange={(val) => setPrice(val)}
              allowCross={false}
              trackStyle={[{ height: 12, backgroundColor: "#0E4F9D" }]}
              railStyle={{ height: 12, backgroundColor: "lightgrey" }}
              handleStyle={[
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #0E4F9D",
                },
                {
                  height: 24,
                  width: 24,
                  marginTop: -6,
                  backgroundColor: "#fff",
                  border: "4px solid #0E4F9D",
                },
              ]}
            />
          </div>
        </div>

        {/* ---------------- SPEED FILTER ---------------- */}
        <div
          className={`mx-auto rounded-2xl h-fit ${
            openSpeed
              ? "bg-[#FDF0E3] w-[90vw] lg:w-105 p-6"
              : "bg-[#F2F3F4] w-[80vw] lg:w-90 p-6"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl lg:text-2xl font-semibold w-full">
              <div className="flex justify-between items-center">
                <div className="text-[#0E4F9D]">Speed range:</div>

                <button
                  onClick={() => setOpenSpeed(!openSpeed)}
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0E4F9D] text-white transition-colors duration-300 cursor-pointer"
                >
                  {openSpeed ? <X size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>

              <div className="flex items-center pt-4 gap-2">
                <div className="text-gray-700 text-3xl lg:text-4xl">
                  {speed[0]} - {speed[1]}
                </div>
                <div className="text-gray-700">Mbps</div>
              </div>
            </div>
          </div>

          <div
            className="overflow-hidden transition-all duration-300 px-4"
            style={{ height: openSpeed ? "40px" : "0px" }}
          >
            <Slider
              range
              min={30}
              max={100}
              step={5}
              value={speed}
              onChange={(val) => setSpeed(val)}
              allowCross={false}
              trackStyle={[{ height: 12, backgroundColor: "#047857" }]}
              railStyle={{ height: 12, backgroundColor: "lightgrey" }}
              handleStyle={[
                {
                  border: "4px solid #047857",
                  height: 24,
                  width: 24,
                  backgroundColor: "#fff",
                  marginTop: -6,
                },
                {
                  border: "4px solid #047857",
                  height: 24,
                  width: 24,
                  backgroundColor: "#fff",
                  marginTop: -6,
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* ---------------- PACKAGE CARDS ---------------- */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No packages found in this range.
          </p>
        )}
      </div>
      <br />
      <img src={router} alt="" />
      <div id="connection-support">
        <ConnectionSupport />
      </div>
    </section>
  );
}

function PackageCard({ pkg }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white shadow-md rounded-xl border border-gray-200 relative h-fit">
      {pkg.popular && (
        <div className="absolute top-0 right-0">
          <img src={popularBadge} alt="Popular Badge" />
        </div>
      )}
      <section className="p-6">
        <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
        <div className="flex items-center justify-between mb-3 mt-8">
          <div>
            <p className="text-gray-600 text-sm">Upto</p>
            <p className="text-3xl font-bold">{pkg.speed} Mbps</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">BDT {pkg.price}</p>
            <p className="text-gray-500 text-xs">Per Month</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 mx-auto bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm mb-4 transition-all duration-300 cursor-pointer"
        >
          {open ? "Hide Offer" : "Show Offer"}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3">
            <h4 className="font-semibold mb-2">Exclusive Privileges</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {pkg.privileges.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => {
            document.getElementById("connection-support")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="mt-5 w-full bg-[#0E4F9D] hover:bg-blue-800 text-white font-semibold py-2 rounded-full cursor-pointer"
        >
          Choose this package
        </button>
      </section>
    </div>
  );
}
