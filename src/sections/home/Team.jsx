import { useTranslation } from "react-i18next";
import TeamCard from "./TeamCard";

const Team = () => {
  const { t } = useTranslation("team");
  const title = t("title", { returnObjects: false });
  const subtitle = t("subtitle", { returnObjects: false });
  const team = t("team", { returnObjects: true });

  return (
    <section className="py-16 flex flex-col items-center md:py-32">
      <h3 className="pb-4">{title}</h3>
      <p className="italic pb-8 antialiased tracking-tight">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
