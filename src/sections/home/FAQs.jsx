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
    <section
      style={{
        background: "linear-gradient(to top left, #3C5B6F, #A0C4D8)",
      }}
      className="py-16 flex flex-col items-center md:py-40"
    >
      <h3 className="text-white pb-4">{t("title")}</h3>
      <p className="text-white italic pb-8 antialiased tracking-tight">
        {t("subtitle")}
      </p>
      <div
        className="container grid grid-cols-1 gap-y-6 gap-x-16 items-start md:grid-cols-2 md:gap-y-6 md:gap-x-8 sm:gap-4"
        data-aos="fade-in"
      >
        {faqs.map((faq, index) => (
          <FAQ key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
