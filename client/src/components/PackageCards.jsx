import axios from "axios";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { popularBadge, router } from "../assets/index";
import ConnectionSupport from "../pages/home/ConnectionSupport";

export default function PackageCards() {
  const [searchParams] = useSearchParams();

  const [packages, setPackages] = useState([]);
  const [price, setPrice] = useState([500, 3000]);
  const [speed, setSpeed] = useState([10, 350]);
  const [openPrice, setOpenPrice] = useState(true);
  const [openSpeed, setOpenSpeed] = useState(true);

  // Fetch packages from API
  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/packages");
      // Ensure speed and price are numbers
      const data = res.data.map((pkg) => ({
        ...pkg,
        speed: Number(pkg.speed),
        price: Number(pkg.price),
        privileges: Array.isArray(pkg.privileges) ? pkg.privileges : [],
      }));

      setPackages(data);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Initialize sliders from URL params
  useEffect(() => {
    const minPrice = Number(searchParams.get("minPrice")) || 500;
    const maxPrice = Number(searchParams.get("maxPrice")) || 3000;
    const minSpeed = Number(searchParams.get("minSpeed")) || 10;
    const maxSpeed = Number(searchParams.get("maxSpeed")) || 350;
    setPrice([minPrice, maxPrice]);
    setSpeed([minSpeed, maxSpeed]);
  }, [searchParams]);

  // Filtered packages according to sliders
  const filteredPackages = useMemo(
    () =>
      packages.filter(
        (pkg) =>
          pkg.price >= price[0] &&
          pkg.price <= price[1] &&
          pkg.speed >= speed[0] &&
          pkg.speed <= speed[1]
      ),
    [packages, price, speed]
  );

  return (
    <section className="py-10 px-4 md:px-0 bg-gray-50">
      <h1 className="text-center text-4xl font-semibold nato pb-10">
        Home Internet <span className="text-[#0E4F9D]">Packages</span>
      </h1>

      {/* Filter Sliders */}
      <div className="container mx-auto lg:px-32 flex flex-col md:flex-row gap-6 mb-8">
        {/* PRICE FILTER */}
        <SliderFilter
          title="Price range"
          value={price}
          setValue={setPrice}
          min={500}
          max={8000}
          unit="BDT"
          open={openPrice}
          setOpen={setOpenPrice}
          trackColor="#0E4F9D"
        />

        {/* SPEED FILTER */}
        <SliderFilter
          title="Speed range"
          value={speed}
          setValue={setSpeed}
          min={10}
          max={450}
          unit="Mbps"
          step={5}
          open={openSpeed}
          setOpen={setOpenSpeed}
          trackColor="#0E4F9D"
        />
      </div>

      {/* PACKAGE CARDS */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {filteredPackages.length > 0 ? (
          [...filteredPackages]
            .sort((a, b) => {
              // Primary: price (ascending)
              if (a.price !== b.price) return a.price - b.price;
              // Secondary: speed (ascending)
              return a.speed - b.speed;
            })
            .map((pkg, index) => <PackageCard key={index} pkg={pkg} />)
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

function SliderFilter({
  title,
  value,
  setValue,
  min,
  max,
  unit,
  step = 50,
  open,
  setOpen,
  trackColor,
}) {
  return (
    <div
      className={`mx-auto rounded-2xl h-fit ${
        open
          ? "bg-[#FDF0E3] w-[90vw] lg:w-105 p-6"
          : "bg-[#F2F3F4] w-[80vw] lg:w-90 p-6"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-semibold w-full">
          <div className="flex justify-between items-center">
            <div className="text-[#0E4F9D]">{title}:</div>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0E4F9D] text-white transition-colors duration-300 cursor-pointer"
            >
              {open ? <X size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>

          <div className="flex items-center pt-4 gap-2">
            <div className="text-gray-700 text-3xl lg:text-4xl">
              {value[0]} - {value[1]}
            </div>
            <div className="text-gray-700">{unit}</div>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 px-4"
        style={{ height: open ? "40px" : "0px" }}
      >
        <Slider
          range
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(val) => setValue(val)}
          allowCross={false}
          trackStyle={[{ height: 12, backgroundColor: trackColor }]}
          railStyle={{ height: 12, backgroundColor: "lightgrey" }}
          handleStyle={[
            {
              height: 24,
              width: 24,
              marginTop: -6,
              backgroundColor: "#fff",
              border: `4px solid ${trackColor}`,
            },
            {
              height: 24,
              width: 24,
              marginTop: -6,
              backgroundColor: "#fff",
              border: `4px solid ${trackColor}`,
            },
          ]}
        />
      </div>
    </div>
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
            open ? "h-[220px] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="mt-3">
            <h4 className="font-semibold mb-2">Exclusive Privileges</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {pkg.privileges.map((item, i) => (
                <>
                  <li key={i}>• {item}</li>
                </>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("connection-support")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-5 w-full bg-[#0E4F9D] hover:bg-blue-800 text-white font-semibold py-2 rounded-full cursor-pointer"
        >
          Choose this package
        </button>
      </section>
    </div>
  );
}
