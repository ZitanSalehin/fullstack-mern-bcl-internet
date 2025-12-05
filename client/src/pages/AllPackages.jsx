import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { popularBadge, router } from "../assets/index";
import ConnectionSupport from "./home/ConnectionSupport";

const pkg = [
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

const AllPackages = () => {
  const [openItems, setOpenItems] = useState(pkg.map(() => true));

  const toggleItem = (index) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="">
      <div className="container mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pkg.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-200 relative h-fit"
          >
            {item.popular && (
              <div className="absolute top-0 right-0">
                <img src={popularBadge} alt="Popular Badge" />
              </div>
            )}

            <section className="p-6">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <div className="flex items-center justify-between mb-3 mt-8">
                <div>
                  <p className="text-gray-600 text-sm">Upto</p>
                  <p className="text-3xl font-bold">{item.speed} Mbps</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">BDT {item.price}</p>
                  <p className="text-gray-500 text-xs">Per Month</p>
                </div>
              </div>

              <button
                onClick={() => toggleItem(index)}
                className="flex items-center gap-2 mx-auto bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm mb-4 transition-all duration-300 cursor-pointer"
              >
                {openItems[index] ? "Hide Offer" : "Show Offer"}
                {openItems[index] ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openItems[index]
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-3">
                  <h4 className="font-semibold mb-2">Exclusive Privileges</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {item.privileges.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  document
                    .getElementById("connection-supports")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-5 w-full bg-[#0E4F9D] hover:bg-blue-800 text-white font-semibold py-2 rounded-full cursor-pointer"
              >
                Choose this package
              </button>
            </section>
          </div>
        ))}
      </div>
      <div className="w-full">
        <img src={router} alt="" />
        <div id="connection-supports">
          <ConnectionSupport />
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
