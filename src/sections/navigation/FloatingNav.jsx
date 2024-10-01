import Scrollspy from "react-scrollspy";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const FloatingNav = () => {
  const data = [
    { id: 1, link: "#", icon: <AiFillHome /> },
    { id: 2, link: "#team", icon: <BsPersonFill /> },
    { id: 3, link: "#services", icon: <MdHomeRepairService /> },
    { id: 4, link: "#faqs", icon: <AiFillAppstore /> },
    { id: 5, link: "#footer", icon: <AiFillMessage /> },
  ];

  return (
    <ul id="floating__nav" className="hidden">
      <Scrollspy
        offset={-350}
        className="scrollspy flex gap-4 py-3 px-6 rounded-full backdrop-filter"
        items={["header", "team", "services", "faqs", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="p-2.5 rounded-full text-xl text-white grid"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
