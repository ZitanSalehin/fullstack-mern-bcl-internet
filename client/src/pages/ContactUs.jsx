import { Mail, MapPin, Phone } from "lucide-react";
import { contact, weCare, weListen } from "../assets/index";

const ContactUs = () => {
  return (
    <main className="bg-gray-50">
      {/* Top Banner */}
      <div
        className="w-full h-64 md:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>

      {/* Icons Section */}
      <div className="flex flex-row justify-center items-center gap-8 my-10 px-6 md:px-20">
        <div className="flex flex-col items-center gap-4">
          <img
            src={weListen}
            alt="We Listen"
            className="w-18 h-18 lg:w-24 lg:h-24 object-contain"
          />
          <p className="text-sm lg:text-xl font-semibold text-center">
            We Listen
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={weCare}
            alt="We Care"
            className="w-18 h-18 lg:w-24 lg:h-24 object-contain"
          />
          <p className="text-sm lg:text-xl font-semibold text-center">
            We Care
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={weCare}
            alt="We Solve"
            className="w-18 h-18 lg:w-24 lg:h-24 object-contain"
          />
          <p className="text-sm lg:text-xl font-semibold text-center">
            We Solve
          </p>
        </div>
      </div>

      {/* Contact Channels */}
      <section className="lg:py-16 px-6 md:px-20 bg-gray-100">
        {/* Top Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Choose your preferred channel to{" "}
            <span className="text-[#0E4F9D]">reach us.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            via Email, Text or Call. We are here for you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Call Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0E4F9D] mb-3">
              Call Us At
            </h3>
            <span className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 items-center text-gray-800">
              <p className="text-2xl font-semibold">16335</p>
              <span>or</span>
              <p className="text-xl font-semibold">09678123123</p>
            </span>
          </div>

          {/* Mail Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0E4F9D] mb-3">
              Mail Us At
            </h3>
            <p className="text-gray-800 text-lg sm:text-xl font-semibold">
              support@bcl.net
            </p>
          </div>

          {/* Messenger Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#0E4F9D] mb-3">
              Knock Us At
            </h3>
            <p className="text-gray-800 text-lg sm:text-xl font-semibold">
              Messenger
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-10 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            How to get <span className="text-[#0E4F9D]">customer support?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-6">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/vH5JMARV8fA"
              title="Customer Support Guide"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Service Offices Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E4F9D]">
            Our Service Offices
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Visit our offices for dedicated customer support and assistance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Office Info */}
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#0E4F9D]">
                Dhaka Service Office
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin size={22} className="text-[#0E4F9D]" />
                  <p>
                    BCL Technologies Ltd, House # 16, Road # 2, Block # F
                    <br /> Niketan, Gulshan-1, Dhaka-1212
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#0E4F9D]" />
                  <p>16335 / 01971497026</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#0E4F9D]" />
                  <p>support@bcl.net</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-[350px]">
            <iframe
              title="Dhaka Office Map"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.143839491091!2d90.41447147534285!3d23.77777838860642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7962c7c040d%3A0x8ace0bbd10b19147!2sNiketan%20Gulshan!5e0!3m2!1sen!2sbd!4v1700000000000"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-3">
                Want to <span className="text-[#0E4F9D]">get in touch?</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              {/* Service Select */}
              <div>
                <label className="block text-gray-500 font-semibold mb-1">
                  Services
                </label>
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition">
                  <option value="">Select Service</option>
                  <option value="internet">Home Internet</option>
                  <option value="corporate">Corporate Internet</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-500 font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-500 font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="01XXXXXXXXX"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-500 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-500 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter Your Message"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-200 transition"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 text-md text-slate-700 rounded-3xl font-semibold hover:bg-blue-700 hover:text-white border border-blue-700 cursor-pointer transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
