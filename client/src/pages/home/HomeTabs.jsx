import { ChevronDown, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReconnectionForm from "./ReconnectionForm";

export default function HomeTabs({
  priceRange = [500, 2000],
  speedRange = [30, 100],
}) {
  const navigate = useNavigate();

  // Slider values
  const [price, setPrice] = useState(priceRange);
  const [speed, setSpeed] = useState(speedRange);

  // Slider open/close toggles
  const [openPrice, setOpenPrice] = useState(true);
  const [openSpeed, setOpenSpeed] = useState(true);

  // Active tab
  const [activeTab, setActiveTab] = useState("packages");

  // Navigate to packages page with selected ranges
  const handleViewResult = () => {
    navigate(
      `/packages?minPrice=${price[0]}&maxPrice=${price[1]}&minSpeed=${speed[0]}&maxSpeed=${speed[1]}`
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h1 className="text-5xl font-bold tracking-tight text-[#2e2c2c] text-center mb-10">
        What are You Looking For?
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-1 mb-10 bg-gray-200 w-fit mx-auto rounded-3xl">
        <button
          onClick={() => setActiveTab("packages")}
          className={`px-6 py-3 rounded-full font-semibold transition cursor-pointer ${
            activeTab === "packages"
              ? "bg-[#0E4F9D] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Packages
        </button>

        <button
          onClick={() => setActiveTab("reconnection")}
          className={`px-6 py-3 rounded-full font-semibold transition cursor-pointer ${
            activeTab === "reconnection"
              ? "bg-[#0E4F9D] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Reconnection
        </button>
      </div>

      {/* ---------------- PACKAGES TAB ---------------- */}
      {activeTab === "packages" && (
        <div className="px-5 lg:px-0">
          <div className="container mx-auto lg:px-32 flex flex-col md:flex-row gap-6 mb-8 items-start">
            {/* Price Slider */}
            <div
              className={`mx-auto rounded-2xl h-fit ${
                openPrice
                  ? "bg-[#FDF0E3] w-full md:w-1/2 p-6"
                  : "bg-[#F2F3F4] w-full md:w-1/2 p-6"
              } transition-all duration-300`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl lg:text-2xl font-semibold w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-[#0E4F9D]">Price Range:</div>

                    <button
                      onClick={() => setOpenPrice(!openPrice)}
                      className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0E4F9D] text-white cursor-pointer"
                    >
                      {openPrice ? <X size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  <div className="flex items-center pt-4 gap-2">
                    <div className="text-gray-700 text-3xl lg:text-4xl">
                      {price?.[0] ?? 0} - {price?.[1] ?? 0}
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
                  min={priceRange[0]}
                  max={priceRange[1]}
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

            {/* Speed Slider */}
            <div
              className={`mx-auto rounded-2xl h-fit ${
                openSpeed
                  ? "bg-[#FDF0E3] w-full md:w-1/2 p-6"
                  : "bg-[#F2F3F4] w-full md:w-1/2 p-6"
              } transition-all duration-300`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-xl lg:text-2xl font-semibold w-full">
                  <div className="flex justify-between items-center">
                    <div className="text-[#0E4F9D]">Speed Range:</div>

                    <button
                      onClick={() => setOpenSpeed(!openSpeed)}
                      className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0E4F9D] text-white cursor-pointer"
                    >
                      {openSpeed ? <X size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  <div className="flex items-center pt-4 gap-2">
                    <div className="text-gray-700 text-3xl lg:text-4xl">
                      {speed?.[0] ?? 0} - {speed?.[1] ?? 0}
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
                  min={speedRange[0]}
                  max={speedRange[1]}
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
          {/* View Result Button */}
          <button
            onClick={handleViewResult}
            className="px-6 py-2 flex justify-center mx-auto hover:bg-[#0E4F9D] text-[#0E4F9D] hover:text-white border-2 border-[#0E4F9D] rounded-4xl text-lg font-semibold h-fit self-center md:self-end cursor-pointer"
          >
            View Result
          </button>
          <Link
            to="/all-packages"
            className="px-7 py-3 bg-gray-300 w-fit mt-10 flex justify-center mx-auto hover:bg-[#0E4F9D] text-[#0E4F9D] hover:text-white  rounded-4xl text-lg font-semibold h-fit self-center md:self-end cursor-pointer"
          >
            View All Packages
          </Link>
        </div>
      )}

      {/* ---------------- RECONNECTION TAB ---------------- */}
      {activeTab === "reconnection" && <ReconnectionForm />}
    </div>
  );
}
