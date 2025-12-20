import { Ear, HeartHandshake, Mail, MapPin, Phone, Wrench } from "lucide-react";
import { contact } from "../assets/index";
import ReconnectionForm from "./home/ReconnectionForm";

const ContactUs = () => {
  return (
    <main className="bg-gray-50">
      {/* ================= Top Banner ================= */}
      <div
        className="w-full h-56 sm:h-72 md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      />

      {/* ================= Icons Section ================= */}
      <section className="py-12">
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:px-20">
          {[
            { icon: Ear, label: "We Listen" },
            { icon: HeartHandshake, label: "We Care" },
            { icon: Wrench, label: "We Solve" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-blue-100 transition hover:scale-110">
                <Icon size={48} className="text-[#00719c]" />
              </div>
              <p className="text-sm lg:text-xl font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Main Content ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full lg:w-1/2 space-y-16">
            {/* Contact Channels */}
            <section>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Choose your channel to{" "}
                  <span className="text-[#00719c]">reach us</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  via Email, Text or Call. We are here for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Call */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition-all">
                  <h3 className="text-xl font-semibold text-[#00719c] mb-3">
                    Call Us At
                  </h3>
                  <p className="text-2xl font-semibold">4444332</p>
                  <p className="text-gray-500">or</p>
                  <p className="text-xl font-semibold">03296781523</p>
                </div>

                {/* Mail */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition-all">
                  <h3 className="text-xl font-semibold text-[#00719c] mb-3">
                    Mail Us At
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold">
                    support@bcl.net
                  </p>
                </div>

                {/* Facebook */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition-all">
                  <h3 className="text-xl font-semibold text-[#00719c] mb-3">
                    Knock Us At
                  </h3>
                  <a
                    href="https://www.facebook.com/bclonline/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg sm:text-xl font-semibold text-sky-400"
                  >
                    BCL Online Facebook
                  </a>
                </div>
              </div>
            </section>

            {/* ================= Service Office ================= */}
            <section>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Our Service <span className="text-[#00719c]">Offices</span>
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                  Visit our offices for dedicated support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Office Info */}
                <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-[#00719c]">
                    Dhaka Service Office
                  </h3>

                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin size={22} className="text-[#00719c]" />
                      <p>
                        Lorem ipsum dolor sit amet consectetur.
                        <br />
                        Lorem, ipsum dolor.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-[#00719c]" />
                      <p>324325 / 01354768821</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-[#00719c]" />
                      <p>support@bcl.net</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-72 md:h-full">
                  <iframe
                    title="Dhaka Office Map"
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.143839491091!2d90.41447147534285!3d23.77777838860642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7962c7c040d%3A0x8ace0bbd10b19147!2sNiketan%20Gulshan!5e0!3m2!1sen!2sbd!4v1700000000000"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-24">
              <ReconnectionForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
