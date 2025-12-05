import { ChevronDown, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

export default function PriceRangeSlider() {
  const [value, setValue] = useState([500, 1000]);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mx-auto bg-amber-200 rounded-2xl transition-all duration-300 ease-in-out 
        ${open ? "w-105 p-6 h-32" : "w-88 p-4 h-20"}`}
    >
      {/* Toggle Button */}
      <div className="flex justify-between">
        <div className="flex justify-center gap-2 mb-4 text-4xl font-semibold">
          {value[0]} - {value[1]} Mbpx
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="mb-4 flex items-center justify-center text-2xl cursor-pointer"
        >
          {open ? <X size={32} /> : <ChevronDown size={32} />}
        </button>
      </div>

      {/* Show slider only when open */}
      {open && (
        <div className="flex flex-col items-center">
          <Slider
            range
            min={500}
            max={5000}
            step={500}
            value={value}
            onChange={(val) => setValue(val)}
            allowCross={false}
            trackStyle={[{ height: 12, backgroundColor: "#3b82f6" }]}
            railStyle={{ height: 12, backgroundColor: "#fcd34d" }}
            handleStyle={[
              {
                height: 24,
                width: 24,
                marginTop: -6,
                backgroundColor: "#fff",
                border: "4px solid #3b82f6",
                cursor: "pointer",
              },
              {
                height: 24,
                width: 24,
                marginTop: -6,
                backgroundColor: "#fff",
                border: "4px solid #3b82f6",
                cursor: "pointer",
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
