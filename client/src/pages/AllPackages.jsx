import axios from "axios";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { popularBadge, router } from "../assets/index";
import ConnectionSupport from "./home/ConnectionSupport";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/packages");
      console.log("Fetched packages:", res.data);

      setPackages(Array.isArray(res.data) ? res.data : []);
      // Initialize openItems array based on fetched packages
      setOpenItems(Array.isArray(res.data) ? res.data.map(() => true) : []);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const toggleItem = (index) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="">
      <div className="container mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(packages) && packages.length > 0 ? (
          [...packages]
            .sort((a, b) => {
              // Primary: price
              if (a.price !== b.price) return a.price - b.price;
              // Secondary: speed
              return a.speed - b.speed;
            })
            .map((item, index) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-xl border border-gray-200 relative h-fit"
              >
                <div className="absolute top-0 right-0">
                  <img src={popularBadge} alt="Popular Badge" />
                </div>

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

                  <button
                    onClick={() => {
                      document
                        .getElementById("connection-supports")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-5 w-full bg-[#0E4F9D] hover:bg-blue-800 text-white font-semibold py-2 rounded-full cursor-pointer"
                  >
                    Choose this package
                  </button>
                </section>
              </div>
            ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No packages available.
          </p>
        )}
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
