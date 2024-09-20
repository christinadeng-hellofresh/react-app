import { useTranslation } from "react-i18next";
import { HiOutlineAcademicCap } from "react-icons/hi";
import raymondLukImg from "../../assets/raymond-luk.jpg";
import eimanSharifpourImg from "../../assets/eiman-sharifpour.jpeg";
import christineGuanImg from "../../assets/christine-guan.jpg";
import rebeccaTsuiImg from "../../assets/rebecca-tsui.jpg";
import mandyZhaoImg from "../../assets/mandy-zhao.jpg";
import emmaJaneImg from "../../assets/emma-jane.jpg";
import jessicaChenImg from "../../assets/jessica-chen.jpg";
import angelaTsuiImg from "../../assets/angela-tsui.jpg";
import rachelChanImg from "../../assets/rachel-chan.jpg";
import camilaSuImg from "../../assets/camila-su.jpg";

const TeamAbout = () => {
  const { t } = useTranslation("team");
  const title = t("title", { returnObjects: false });
  const subtitle = t("subtitle", { returnObjects: false });
  const team = t("team", { returnObjects: true });
  const heading = t("heading", { returnObjects: true });

  const images = {
    "raymond-luk": raymondLukImg,
    "eiman-sharifpour": eimanSharifpourImg,
    "christine-guan": christineGuanImg,
    "rebecca-tsui": rebeccaTsuiImg,
    "mandy-zhao": mandyZhaoImg,
    "emma-jane": emmaJaneImg,
    "jessica-chen": jessicaChenImg,
    "angela-tsui": angelaTsuiImg,
    "rachel-chan": rachelChanImg,
    "camila-su": camilaSuImg,
  };

  return (
    <section className="flex flex-col items-stretch px-36">
      <h3 className="pb-4 text-center">{title}</h3>
      <p className="italic pb-8 antialiased tracking-tight">{subtitle}</p>
      {team.map((member, index) => (
        <div
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center md:items-start border border-gray-200 overflow-hidden shadow-lg w-full m-0.5`}
          style={{
            background: "linear-gradient(to bottom right, #3C5B6F, #A0C4D8)",
          }}
          key={member.name}
        >
          <img
            src={images[member.image]}
            alt="Card Image"
            className="w-full md:w-1/3 object-contain"
          />

          <div className="w-full md:w-2/3 p-16 text-white">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {member.name}
            </h3>
            <h5 className="font-semibold mb-4 underline text-white">
              {member.position}
            </h5>
            <div
              className="text-sm "
              dangerouslySetInnerHTML={{ __html: member.description }}
            />
            {member.education && member.education.length > 0 && (
              <div className="w-full">
                <h5 className="font-semibold flex items-center text-white pt-4">
                  <HiOutlineAcademicCap className="inline mr-2" />{" "}
                  {heading.education}
                </h5>
                <ul className="text-sm mt-2">
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/3 p-8"></div>
        </div>
      ))}
    </section>
  );
};

export default TeamAbout;
