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
      className="relative flex flex-col items-center py-24"
      style={{
        background: "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
      }}
    >
      <h3 className="pb-4 text-white">{title}</h3>
      <p className="italic pb-8 antialiased tracking-tight text-white">
        {subtitle}
      </p>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        style={{ zIndex: 10 }}
        aria-label="Scroll left"
      >
        <AiOutlineLeft size={24} />
      </button>
      <div
        className="flex overflow-x-auto whitespace-nowrap gap-8 w-full px-6 py-20 opacity-80"
        style={{
          scrollBehavior: "smooth",
        }}
        ref={carouselRef}
      >
        {services.map((service, index) => (
          <a
            href={service.path}
            key={index}
            className="block w-full sm:w-80 bg-white shadow-lg rounded-lg flex-shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2"
            style={{
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
            }}
          >
            <img
              src={images[service.imageSrc]}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="font-semibold">{service.title}</h4>
              <ul className="text-black text-sm mt-2">
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
  );
};

export default Services;
