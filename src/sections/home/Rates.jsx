import {
  AiOutlineLike,
  AiOutlineTeam,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const iconMap = {
  AiOutlineLike: <AiOutlineLike size={42} />,
  AiOutlineTeam: <AiOutlineTeam size={42} />,
  AiOutlineDollarCircle: <AiOutlineDollarCircle size={42} />,
};

const Rates = () => {
  const { t } = useTranslation("navbar");
  const navbar = t("navbar", { returnObjects: true });

  return (
    <div
      className="flex flex-col items-center justify-center text-center text-gray-200 py-16 shadow-lg relative z-10"
      style={{
        background: "#3C5B6F",
      }}
    >
      <h3 className="pb-16 text-2xl text-center text-gray-200 font-semibold">
        {navbar.aboutTitle}
      </h3>
      <div
        className="flex flex-col md:flex-row"
        data-aos="flip-down"
        data-aos-duration="2000"
      >
        {navbar.about.map((item) => (
          <div key={item.title} className="my-6 md:mx-10 lg:mx-20">
            <div className="flex items-center justify-center mb-4">
              <span className="about__card-icon">{iconMap[item.icon]}</span>
            </div>
            <h5 className="pb-2 text-gray-200">{item.title}</h5>
            <p className="text-xs antialiased italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
