import {
  AiOutlineLike,
  AiOutlineTeam,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const iconMap = {
  AiOutlineLike: <AiOutlineLike size={32} />,
  AiOutlineTeam: <AiOutlineTeam size={32} />,
  AiOutlineDollarCircle: <AiOutlineDollarCircle size={32} />,
};

const Rates = () => {
  // Language
  const { t } = useTranslation("navbar");
  const navbar = t("navbar", { returnObjects: true });

  return (
    <div
      className="flex flex-col items-center bg-white py-16 my-10 md:py-56"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <h3 className="pb-3">{navbar.aboutTitle}</h3>
      <div className="flex text-center flex-col md:flex-row">
        {navbar.about.map((item) => (
          <div key={item.title} className="my-6 md:mx-10 lg:mx-20">
            <span className="about__card-icon">{iconMap[item.icon]}</span>
            <h5 className="pb-2">{item.title}</h5>
            <p className="text-xs antialiased italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
