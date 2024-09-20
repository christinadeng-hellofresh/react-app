import ServicesTabs from "../sections/services-tabs/ServicesTabs";
import { useTranslation } from "react-i18next";
import imagePath from "../assets/real-estate-law.jpg";

export default function LawPage() {
  const path = window.location.pathname;
  const { t } = useTranslation("services");
  const services = t("services", { returnObjects: true });
  const service = services.find((service) => service.path == path);

  return (
    <main className="pt-32 px-8">
      {/* <div className="flex-col"> */}
      <h2>{service.title}</h2>
      {/* </div> */}
      <div className="lg:flex justify-start py-8">
        <img src={imagePath} alt={service.title} className="w-full" />
        <p className="hidden lg:block pl-8">{service.desc}</p>
      </div>
      {service.tabs && service.tabs.length > 0 && (
        <ServicesTabs tabs={service.tabs} />
      )}
    </main>
  );
}
