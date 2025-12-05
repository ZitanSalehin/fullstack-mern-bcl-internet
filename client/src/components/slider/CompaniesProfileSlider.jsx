import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
} from "../../assets/index";

const companies = [
  {
    id: 1,
    logo: client1,
    name: "RR Visa Tourism",
  },
  {
    id: 2,
    logo: client2,
    name: "The Migration",
  },
  {
    id: 3,
    logo: client3,
    name: "Zeron Academy",
  },
  {
    id: 4,
    logo: client4,
    name: "Zeron Study Abroad",
  },
  {
    id: 5,
    logo: client5,
    name: "RR Visa Tourism",
  },
  {
    id: 6,
    logo: client6,
    name: "The Migration",
  },
  {
    id: 7,
    logo: client7,
    name: "Zeron Academy",
  },
];

export default function CompaniesProfileSlider() {
  return (
    <section id="company-profile" className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl text-[#386ab1]">
            132+ Trusted Companies
          </h3>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            To become a globally recognized and trusted organization that
            connects people, dreams, and destinations through education,
            migration, and travel — empowering lives and inspiring possibilities
            worldwide
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-6"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <div className="flex flex-col items-center text-center">
                <div className="w-44 h-44 bg-white p-2 flex items-center justify-center">
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
  );
}
