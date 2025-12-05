import { Link } from "react-router-dom";
import { getConnection, speedMeter, users } from "../../assets";

const SpeedMeter = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-5 justify-center mx-auto text-center px-4">
          <p className="text-slate-700 font-semibold text-xl sm:text-2xl nato">
            Are you getting what you are paid for?
          </p>

          <img
            src={speedMeter}
            alt="speed meter"
            className="w-full max-w-sm sm:max-w-md h-auto lg:w-105 lg:h-72"
          />

          <Link to="speed-check">
            <button className="flex justify-center cursor-pointer bg-[#0E4F9D] py-2 px-5 rounded-3xl text-lg sm:text-2xl text-white mt-2">
              Click here
            </button>
          </Link>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            What is my{" "}
            <span className="text-[#0E4F9D]">current internet speed?</span>
          </h3>
        </div>

        {/* RIGHT SECTION REPLACEMENT */}
        <div className="w-1/2 flex flex-col lg:flex-row items-center gap-8 justify-center mx-auto">
          {/* CARD 1 */}
          <div className="w-72 p-4 rounded-xl shadow-lg bg-white flex flex-col items-center">
            <img
              src={users}
              alt="Users"
              className="w-auto h-32 object-cover rounded-lg"
            />
            <p className="mt-4 text-lg font-semibold text-slate-700">
              Get BCL Now
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-72 p-4 rounded-xl shadow-lg bg-white flex flex-col items-center">
            <img
              src={getConnection}
              alt="Get Connection"
              className="w-auto h-32 object-cover rounded-lg"
            />
            <p className="mt-4 text-lg font-semibold text-slate-700">
              Send Us Your Concern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedMeter;
