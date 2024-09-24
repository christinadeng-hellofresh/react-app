import { useTranslation } from "react-i18next";
import TeamCard from "./TeamCard";

const Team = () => {
  const { t } = useTranslation("team");
  const title = t("title", { returnObjects: false });
  const subtitle = t("subtitle", { returnObjects: false });
  const team = t("team", { returnObjects: true });

  return (
    <div
      className="flex bg-gray-100 py-24 lg:py-28 shadow-lg relative flex-col lg:flex-row-reverse"
      id="team"
    >
      <div className="w-full p-8 flex flex-col justify-center lg:w-1/4 lg:bg-[#3C5B6F] lg:-my-28">
        <h3 className="text-2xl font-semibold text-center text-gray-800 lg:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="italic mt-4 text-center text-gray-800 lg:text-gray-200 mb-4">
          {subtitle}
        </p>
      </div>

      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto lg:w-3/4"
        data-aos="fade-right"
      >
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
