import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import realEstateLawImg from "../../assets/real-estate.jpg";
import familyLawImg from "../../assets/family-law.jpg";
import willImg from "../../assets/will.jpg";
import personalInjuryImg from "../../assets/personal-injury.png";
import immigrationImg from "../../assets/immigration.jpg";
import corporateLawImg from "../../assets/corporate-law.jpg";
import otherServicesImg from "../../assets/other-services.jpg";

const images = {
  "real-estate.jpg": realEstateLawImg,
  "family-law.jpg": familyLawImg,
  "will.jpg": willImg,
  "personal-injury.png": personalInjuryImg,
  "immigration.jpg": immigrationImg,
  "corporate-law.jpg": corporateLawImg,
  "other-services.jpg": otherServicesImg,
};

const Services = () => {
  const { t } = useTranslation("services");
  const title = t("title", { returnObjects: false });
  const subtitle = t("subtitle", { returnObjects: false });
  const services = t("services", { returnObjects: true });

  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="flex h-auto shadow-lg relative z-10 flex-col lg:flex-row py-24 lg:py-48"
      id="services"
    >
      <div className="w-full lg:w-1/4 p-8 flex flex-col justify-center lg:-my-48 lg:bg-[#3C5B6F]">
        <h3 className="text-2xl font-semibold text-center text-gray-800 lg:text-gray-200">
          {title}
        </h3>
        <p className="italic mt-4 text-center text-gray-800 lg:text-gray-200">
          {subtitle}
        </p>
      </div>

      <div className="w-full lg:w-3/4 relative px-8 drop-shadow-xl">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          style={{ zIndex: 10 }}
          aria-label="Scroll left"
        >
          <AiOutlineLeft size={24} />
        </button>
        <div
          className="flex overflow-x-auto whitespace-nowrap gap-8 w-full px-6 py-20"
          style={{ scrollBehavior: "smooth" }}
          ref={carouselRef}
          data-aos="fade-left"
        >
          {services.map((service, index) => (
            <a
              href={service.path}
              key={index}
              className="block w-full sm:w-96 shadow-lg rounded-lg flex-shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: "15px",
                background: "#3C5B6F",
              }}
            >
              <img
                src={images[service.imageSrc]}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-200">{service.title}</h4>
                <ul className="text-sm mt-2 text-gray-200">
                  {service.tabs.map((tab, i) => (
                    <li
                      key={i}
                      className="tracking-wide py-1 font-light flex flex-row items-center"
                    >
                      <AiOutlineCheckCircle />
                      <span className="pl-2">{tab.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          style={{ zIndex: 10 }}
          aria-label="Scroll right"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Services;
