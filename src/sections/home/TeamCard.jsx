import { useState } from "react";
import { Modal } from "flowbite-react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineAcademicCap,
  HiOutlineIdentification,
} from "react-icons/hi";
import { useTranslation } from "react-i18next";
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

const TeamCard = ({ member }) => {
  const { t } = useTranslation("team");
  const heading = t("heading", { returnObjects: true });

  const [openModal, setOpenModal] = useState(false);

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
    <div className="text-center p-4 relative group">
      <a onClick={() => setOpenModal(!openModal)} rel="noopener noreferrer">
        <div className="relative text-center w-52 h-52 sm:w-40 sm:h-40 mx-auto">
          <img
            src={images[member.image]}
            alt={member.name}
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
            <span className="text-white text-lg font-semibold">
              {heading.meet} {member.name.split(" ")[0]}
            </span>
          </div>
        </div>
        <h4 className="mt-4 mb-2 font-semibold tracking-wide">{member.name}</h4>
        <p className="text-xs text-gray-500 tracking-tight italic font-light underline">
          {member.position}
        </p>
      </a>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(!openModal)}
        className="backdrop-filter backdrop-blur-lg"
      >
        <Modal.Header className="shadow-2xl">
          {heading.meet} {member.name.split(" ")[0]}
        </Modal.Header>
        <Modal.Body className="flex justify-center shadow-2xl rounded-lg p-6">
          <div className="w-full border border-blue-500 rounded-lg shadow-xl p-6">
            <div className="flex flex-col items-center pb-4">
              <img
                className="w-1/3 h-1/3 mb-3 rounded-full shadow-lg border-2 border-white"
                src={images[member.image]}
                alt={member.name}
              />
              <h5 className="mb-1 text-xl font-medium">{member.name}</h5>
              <span className="text-sm italic underline">
                {member.position}
              </span>
              <div
                className="text-sm p-4"
                dangerouslySetInnerHTML={{ __html: member.description }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
                {member.education && member.education.length > 0 && (
                  <div className="w-full">
                    <h5 className="font-semibold flex items-center underline">
                      <HiOutlineAcademicCap className="inline mr-2" />{" "}
                      {heading.education}
                    </h5>
                    <ul className="list-disc pl-5 text-sm mt-2">
                      {member.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="w-full">
                  <h5 className="font-semibold flex items-center underline">
                    <HiOutlineIdentification className="inline mr-2" />{" "}
                    {heading.contact}
                  </h5>
                  {member.phone?.length > 0 && (
                    <p className="text-sm flex items-center mb-3">
                      <HiOutlinePhone className="inline mr-2" />
                      {member.phone.join(", ")}
                    </p>
                  )}
                  {member.email && (
                    <p className="text-sm flex items-center">
                      <HiOutlineMail className="inline mr-2" />
                      {member.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TeamCard;
