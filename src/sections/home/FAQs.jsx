import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./FAQ";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const { t } = useTranslation("faqs");
  const faqs = t("faqs", { returnObjects: true });

  return (
    <div
      className="flex flex-col items-center bg-white py-16 shadow-lg md:py-32"
      id="faqs"
    >
      <h3 className="text-2xl font-semibold text-center text-gray-800">
        {t("title")}
      </h3>
      <p className="italic mt-4 text-center text-gray-800 pb-16">
        {t("subtitle")}
      </p>
      <div
        className="container grid grid-cols-1 gap-y-6 gap-x-16 items-start md:grid-cols-2 md:gap-y-6 md:gap-x-8 sm:gap-4"
        data-aos="fade-up"
      >
        {faqs.map((faq, index) => (
          <FAQ key={index} faq={faq} isOpen={index < 2} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
