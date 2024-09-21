import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import homepage from "../../assets/homepage.png";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation("navbar");
  const navbar = t("navbar", { returnObjects: true });

  return (
    <header
      id="header"
      data-aos="fade-down"
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 w-full h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${homepage})`,
          transform: `translate(-50%, -50%) translateY(${offsetY * 0.5}px)`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col text-center items-center w-full h-full justify-center">
        <h1
          data-aos="fade-up"
          className="text-white pb-2 tracking-wide font-medium uppercase"
        >
          {navbar.title}
        </h1>
        <h2 data-aos="fade-up" className="text-white pb-8 tracking-wide">
          {navbar.subtitle}
        </h2>
        <p data-aos="fade-down" className="text-white italic font-base ">
          {navbar.desc}
        </p>
        <div className="pt-10" data-aos="fade-down">
          <button
            target="_blank"
            href={navbar.googleDoc.url}
            className="text-sm border-2 border-white border-double p-4 text-white font-extralight"
          >
            {navbar.googleDoc.title}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
