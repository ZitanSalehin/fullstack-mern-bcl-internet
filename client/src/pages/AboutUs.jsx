import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  aboutUs,
  client10,
  client11,
  client12,
  client13,
  client8,
  client9,
} from "../assets/index";

const companies = [
  {
    id: 1,
    logo: client8,
  },
  {
    id: 2,
    logo: client9,
  },
  {
    id: 3,
    logo: client10,
  },
  {
    id: 4,
    logo: client11,
  },
  {
    id: 5,
    logo: client12,
  },
  {
    id: 6,
    logo: client13,
  },
  {
    id: 7,
    logo: client8,
  },
  {
    id: 8,
    logo: client9,
  },
  {
    id: 9,
    logo: client10,
  },
  {
    id: 10,
    logo: client11,
  },
  {
    id: 11,
    logo: client12,
  },
  {
    id: 12,
    logo: client13,
  },
];

const AboutUs = () => {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] md:h-[60vh]">
        <img
          src={aboutUs}
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="container mx-auto max-w-7xl px-4">
        {/* ================= MAIN CONTENT ================= */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-8 lg:py-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            BCL Technologies Limited
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify mb-12">
            Beginning our journey in the year 2000, BCL Technologies Limited is
            a leading IT solution provider offering a range of solutions
            including IP telephony, cybersecurity, Office 365 and fixed fiber
            broadband connections across both the retail and corporate markets
            of Bangladesh.
            <br />
            <br />
            In October of 2021, BCL crossed 100k retail broadband connections,
            becoming the largest ISP in the country in terms of active
            subscribers. BCL is also a pioneer in offering integrated solutions
            in the corporate sector of Bangladesh and is the only ISP connected
            with every bank in the country.
            <br />
            <br />
            At BCL, we place the customer at the center of our business and our
            highly trained team of professionals ensure a level of quality and
            service which remain unmatched. We believe in innovating to simplify
            and in taking ownership of our actions and services. Whether it be
            people or organizations, we see it as our duty to enrich the lives
            of all our customers and to become the preferred choice for a
            digital lifestyle in the market.
          </p>

          {/* ============= VISION + MISSION CARDS ============= */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80">
              {/* Background Image */}
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  Our Vision
                </h3>
                <p className="text-gray-200">
                  In the next 5 years, BCL aspires to become the preferred
                  choice in digital lifestyle using world-class technology and
                  innovation.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80">
              {/* Background Image */}
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-3xl font-semibold mb-3 text-white">
                  Our Mission
                </h3>
                <p className="text-gray-200">
                  To offer innovative, fast and reliable technology solutions
                  that simplify the lives of individuals and empower
                  organizations to grow in a digital world.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="company-profile" className="text-gray-800 py-14">
          <div className="">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-semibold">
                Our <span className="text-[#386ab1]">Clients</span>
              </h3>
            </div>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="pb-6"
            >
              {companies.map((company) => (
                <SwiperSlide key={company.id}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-44 h-32 bg-white border p-2 flex items-center justify-center">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* <h3 className="mt-4 text-sm font-semibold">{company.name}</h3> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutUs;
