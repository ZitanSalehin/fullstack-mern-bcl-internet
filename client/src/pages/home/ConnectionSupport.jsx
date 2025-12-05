import { Mail, PhoneCall, User } from "lucide-react";
import { useState } from "react";
import { support } from "../../assets/index";

const ConnectionSupport = () => {
  const [district, setDistrict] = useState("");

  const districtsOfBangladesh = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Nawabganj",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-30 px-4 md:px-10 mt-15 justify-start">
        {/* ---------- LEFT FORM ---------- */}
        <div className="md:w-1/2 space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mx-auto nato">
            Need <span className="text-[#0E4F9D]">New Connection?</span>
          </h2>

          <form className="flex flex-col gap-6">
            <h2 className="text-gray-500 text-lg">
              Fill up the form and our team will get back to you within 24
              hours.
            </h2>
            {/* Name */}{" "}
            <div className="relative">
              {" "}
              <label className="block text-gray-500 font-semibold mb-1">
                {" "}
                Your Name{" "}
              </label>{" "}
              <div className="relative">
                {" "}
                <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />{" "}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 p-3 bg-gray-100 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Phone Number */}{" "}
            <div className="relative">
              {" "}
              <label className="block text-gray-500 font-semibold mb-1">
                {" "}
                Phone Number{" "}
              </label>{" "}
              <div className="relative">
                {" "}
                <PhoneCall className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />{" "}
                <input
                  type="text"
                  placeholder="01XXXXXXXXX"
                  className="w-full pl-10 p-3 bg-gray-100 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition"
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* Email */}{" "}
            <div className="relative">
              {" "}
              <label className="block text-gray-500 font-semibold mb-1">
                {" "}
                Email{" "}
              </label>{" "}
              <div className="relative">
                {" "}
                <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />{" "}
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full pl-10 p-3 bg-gray-100 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition"
                />{" "}
              </div>{" "}
            </div>
            {/* Address Textarea */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">
                Full Address
              </label>
              <textarea
                placeholder="Write your full address including Upazila, Area, House/Road No."
                rows="4"
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition"
              ></textarea>
            </div>
            {/* District Select */}
            <div>
              <label className="block text-gray-500 font-semibold mb-1">
                District
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg"
              >
                <option value="">Select District</option>
                {districtsOfBangladesh.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            {/* Submit Button */}
            <div className="flex justify-start mt-2">
              <button
                type="submit"
                className="px-5 py-2 text-md text-slate-700 rounded-3xl font-semibold border border-[#0E4F9D] hover:bg-[#0E4F9D] hover:text-white transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-28">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mx-auto nato">
            24/7 Support <span className="text-[#0E4F9D]">Service</span>
          </h2>

          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={support}
              alt="Connection Illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-600/10"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl font-semibold text-center px-4">
                Enjoy Premium Customer Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSupport;
