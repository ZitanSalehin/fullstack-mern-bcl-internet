import axios from "axios";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { popularBadge } from "../assets/index";
import ConnectionSupport from "./home/ConnectionSupport";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      const res = await axios.get("https://bclonline.net/api/packages");
      console.log("Fetched packages:", res.data);

      // Ensure privileges is always an array
      const data = (Array.isArray(res.data) ? res.data : []).map((pkg) => ({
        ...pkg,
        privileges: Array.isArray(pkg.privileges) ? pkg.privileges : [],
      }));

      setPackages(data);
      // Initialize openItems array based on fetched packages
      setOpenItems(data.map(() => true));
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
        {packages.length > 0 ? (
          [...packages]
            .sort((a, b) => {
              if (a.price !== b.price) return a.price - b.price;
              return a.speed - b.speed;
            })
            .map((item, index) => (
              <div
                key={item._id}
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

                  {/* Toggle button */}
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

                  {/* Privileges list */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      openItems[index]
                        ? "h-[220px] opacity-100"
                        : "h-0 opacity-0"
                    }`}
                  >
                    {item.privileges.length > 0 && (
                      <div className="mt-3">
                        <h4 className="font-semibold mb-2">
                          Exclusive Privileges
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {item.privileges.map((priv, i) => (
                            <li key={i}>• {priv}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      document
                        .getElementById("connection-supports")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="mt-5 w-full bg-[#00719c] hover:bg-blue-800 text-white font-semibold py-2 rounded-full cursor-pointer"
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
        <div id="connection-supports">
          <ConnectionSupport />
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
