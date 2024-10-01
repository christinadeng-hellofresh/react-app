import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import realEstateLawImg from "../../assets/service/real-estate.jpg";
import familyLawImg from "../../assets/service/family-law.jpg";
import willImg from "../../assets/service/will.jpg";
import personalInjuryImg from "../../assets/service/personal-injury.png";
import immigrationImg from "../../assets/service/immigration.jpg";
import corporateLawImg from "../../assets/service/corporate-law.jpg";
import otherServicesImg from "../../assets/service/other-services.jpg";

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
        <h3 className="text-2xl text-center text-gray-800 lg:text-gray-200 font-semibold">
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
              className="block w-full sm:w-96 shadow-lg rounded-lg flex-shrink-0 transition-transform duration-300 ease-in-out hover:-translate-y-2 opacity-90"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: "15px",
                height: "450px",
              }}
            >
              <div className="flex flex-col h-full">
                <img
                  src={images[service.imageSrc]}
                  alt={service.title}
                  className="w-full h-44 object-cover rounded-t-lg opacity-80"
                />
                <div className="py-4 px-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {service.title}
                    </h4>
                    <ul className="text-sm mt-2 text-gray-800">
                      {service.tabs.map((tab, i) => (
                        <li
                          key={i}
                          className="tracking-wide py-1 flex flex-row items-center"
                        >
                          <AiOutlineCheckCircle size={20} />{" "}
                          <span className="pl-2">{tab.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="mt-4 bg-[#3C5B6F] text-white py-2 px-4 rounded hover:bg-opacity-90"
                    onClick={() => (window.location.href = service.path)}
                  >
                    Learn More
                  </button>
                </div>
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
